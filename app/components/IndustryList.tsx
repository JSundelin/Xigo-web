interface IndustryListProps {
  text: string;
}

export function IndustryList({ text }: IndustryListProps) {
  return (
    <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-3xl">{text}</p>
  );
}
