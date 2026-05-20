import { Card } from "./Card";
import { Badge } from "./Badge";

interface CaseSnapshotCardProps {
  title: string;
  industry: string;
  teaser: string;
  situation?: string;
  approach?: string;
  delivery?: string;
  results?: string[];
  expanded?: boolean;
}

export function CaseSnapshotCard({
  title,
  industry,
  teaser,
  situation,
  approach,
  delivery,
  results,
  expanded = false,
}: CaseSnapshotCardProps) {
  return (
    <Card padding="lg" className="h-full">
      <Badge variant="subtle" className="mb-3">
        {industry}
      </Badge>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-foreground-muted)] mb-4">{teaser}</p>
      {expanded && situation && (
        <div className="space-y-4 border-t border-[var(--color-border)] pt-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--brand-accent)] font-semibold mb-1">
              Situation
            </p>
            <p className="text-sm text-[var(--color-foreground-muted)]">{situation}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--brand-accent)] font-semibold mb-1">
              Insats
            </p>
            <p className="text-sm text-[var(--color-foreground-muted)]">{approach}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--brand-accent)] font-semibold mb-1">
              Leverans
            </p>
            <p className="text-sm text-[var(--color-foreground-muted)]">{delivery}</p>
          </div>
          {results && results.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--brand-accent)] font-semibold mb-2">
                Resultat
              </p>
              <ul className="space-y-1">
                {results.map((r) => (
                  <li
                    key={r}
                    className="text-sm text-[var(--color-foreground)] flex items-start gap-2"
                  >
                    <span className="text-[var(--brand-accent)] mt-0.5">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
