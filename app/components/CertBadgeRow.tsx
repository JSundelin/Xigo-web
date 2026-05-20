interface CertBadgeRowProps {
  certifications: string[];
}

export function CertBadgeRow({ certifications }: CertBadgeRowProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {certifications.map((cert) => (
        <span
          key={cert}
          className="px-4 py-2 text-xs font-medium text-[var(--color-foreground-muted)] border border-[var(--color-border)] rounded-[var(--radius-sm)] bg-[var(--surface)]"
        >
          {cert}
        </span>
      ))}
    </div>
  );
}
