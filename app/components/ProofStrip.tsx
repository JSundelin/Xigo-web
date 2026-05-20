import { Badge } from "./Badge";

interface ProofStripProps {
  title: string;
  clients: string[];
  metrics: string[];
}

export function ProofStrip({ title, clients, metrics }: ProofStripProps) {
  return (
    <div>
      <h2 className="text-center mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {clients.map((client) => (
          <span
            key={client}
            className="text-lg font-medium text-[var(--color-foreground-muted)]"
          >
            {client}
          </span>
        ))}
      </div>
      <div className="w-24 h-px bg-[var(--color-border)] mx-auto mb-8" />
      <div className="flex flex-wrap justify-center gap-3">
        {metrics.map((metric) => (
          <Badge key={metric} variant="subtle">
            {metric}
          </Badge>
        ))}
      </div>
    </div>
  );
}
