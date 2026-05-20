import { NextResponse } from "next/server";
import { siteConfig } from "@/app/lib/site";

type ContactBody = {
  name: string;
  organization: string;
  description: string;
  deadline?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    if (!body.name?.trim() || !body.organization?.trim() || !body.description?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (body.description.length > 1000) {
      return NextResponse.json({ error: "Description too long" }, { status: 400 });
    }

    const payload = {
      to: siteConfig.email,
      from: "XIGO Website <noreply@xigo.se>",
      subject: `Kontakt: ${body.organization} — ${body.name}`,
      text: [
        `Namn: ${body.name}`,
        `Organisation: ${body.organization}`,
        `Beskrivning:\n${body.description}`,
        body.deadline ? `Deadline: ${body.deadline}` : null,
      ]
        .filter(Boolean)
        .join("\n\n"),
    };

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "XIGO <onboarding@resend.dev>",
          to: [siteConfig.email],
          reply_to: siteConfig.email,
          subject: payload.subject,
          text: payload.text,
        }),
      });

      if (!res.ok) {
        console.error("Resend error", await res.text());
        return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
      }
    } else if (process.env.NODE_ENV === "production") {
      console.warn("RESEND_API_KEY not set; contact form logged only");
      console.info("Contact submission", payload);
      return NextResponse.json(
        { error: "Email not configured" },
        { status: 503 }
      );
    } else {
      console.info("Contact submission (dev)", payload);
    }

    const hubspotUrl = process.env.HUBSPOT_FORM_URL;
    if (hubspotUrl) {
      await fetch(hubspotUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: body.name },
            { name: "company", value: body.organization },
            { name: "message", value: body.description },
          ],
        }),
      }).catch((err) => console.error("HubSpot forward failed", err));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
