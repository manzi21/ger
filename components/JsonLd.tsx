interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Server Component – schreibt JSON-LD direkt in den HTML-Output.
 * `dangerouslySetInnerHTML` ist hier sicher, weil wir den Inhalt selbst
 * via JSON.stringify serialisieren (kein User-Input).
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
