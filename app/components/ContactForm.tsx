"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { contactContent } from "@/app/lib/contact";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    description: "",
    deadline: "",
    website: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submit failed");

      setFormState("success");
      setFormData({
        name: "",
        organization: "",
        description: "",
        deadline: "",
        website: "",
      });
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-semibold mb-2">{contactContent.form.successTitle}</h3>
        <p className="text-sm text-[var(--color-foreground-muted)]">
          {contactContent.form.successMessage}
        </p>
      </div>
    );
  }

  const inputStyles = `
    w-full px-4 py-3
    bg-[var(--surface)]
    border border-[var(--color-border)]
    rounded-[var(--radius-sm)]
    text-[var(--color-foreground)]
    placeholder-[var(--color-foreground-subtle)]
    focus:border-[var(--brand-accent)]
    focus:outline-none
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formState === "error" && (
        <div className="p-4 border border-red-200 bg-red-50 rounded-[var(--radius-sm)] text-red-800 text-sm">
          {contactContent.form.errorMessage}
        </div>
      )}

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Webbplats</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm mb-2">
          {contactContent.form.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputStyles}
          placeholder={contactContent.form.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm mb-2">
          {contactContent.form.orgLabel}
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          className={inputStyles}
          placeholder={contactContent.form.orgPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm mb-2">
          {contactContent.form.descriptionLabel}
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          maxLength={1000}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={`${inputStyles} resize-y min-h-[120px]`}
          placeholder={contactContent.form.descriptionPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="deadline" className="block text-sm mb-2">
          {contactContent.form.deadlineLabel}{" "}
          <span className="text-[var(--color-foreground-subtle)]">(valfritt)</span>
        </label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
          className={inputStyles}
          placeholder={contactContent.form.deadlinePlaceholder}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={formState === "submitting"}>
        {formState === "submitting" ? "Skickar..." : contactContent.form.submitLabel}
      </Button>

      <p className="text-caption text-center">{contactContent.form.consent}</p>
    </form>
  );
}
