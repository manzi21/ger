import JsonLd from './JsonLd';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  /** Wenn true, wird ein FAQPage-JSON-LD-Schema mit ausgegeben. */
  schema?: boolean;
}

export default function FAQ({ items, title = 'Häufige Fragen', schema = true }: FAQProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="my-10">
      <h2 id="faq-heading" className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <dl className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
              <dt className="text-base font-semibold text-slate-900">{item.q}</dt>
              <span aria-hidden className="text-slate-400 transition group-open:rotate-45">+</span>
            </summary>
            <dd className="mt-3 text-sm leading-relaxed text-slate-700">{item.a}</dd>
          </details>
        ))}
      </dl>

      {schema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((i) => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          }}
        />
      )}
    </section>
  );
}
