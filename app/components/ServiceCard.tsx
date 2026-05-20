import Link from "next/link";
import {
  ClipboardCheck,
  Cloud,
  GitBranch,
  Settings2,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Card } from "./Card";

const iconMap: Record<string, LucideIcon> = {
  "clipboard-check": ClipboardCheck,
  cloud: Cloud,
  "git-branch": GitBranch,
  "settings-2": Settings2,
  "user-check": UserCheck,
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? ClipboardCheck;

  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full transition-shadow duration-[var(--duration-normal)] group-hover:shadow-[var(--shadow-2)]">
        <Icon
          className="w-8 h-8 text-[var(--brand-accent)] mb-4"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="text-[var(--text-h4-size)] font-semibold leading-snug mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-foreground-muted)] mb-4 leading-relaxed">
          {description}
        </p>
        <span className="text-sm font-medium text-[var(--brand-accent)] group-hover:underline underline-offset-4">
          Läs mer →
        </span>
      </Card>
    </Link>
  );
}
