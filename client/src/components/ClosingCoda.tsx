import type { EmpireState, CodaContent } from '../types';

interface Props {
  empire: EmpireState;
  coda: CodaContent;
}

export default function ClosingCoda({ empire, coda }: Props) {
  const content = coda[empire];
  const accentColor = empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)';

  return (
    <section
      className="mb-16 rounded border py-10 px-8"
      style={{
        backgroundColor: 'var(--color-surface-dark)',
        borderColor: 'var(--color-accent)',
      }}
    >
      <div className="w-10 h-px mb-6" style={{ backgroundColor: accentColor }} />

      <div key={empire} className="fade-in">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
        >
          {content.heading}
        </h2>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--color-ink)' }}
        >
          {content.body}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-accent)' }}>
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
        >
          Afterlives
        </p>
        <ul
          className="mt-3 space-y-2 text-sm"
          style={{ color: 'var(--color-ink)' }}
        >
          <li>
            <span style={{ color: accentColor }}>→</span>{' '}
            Singapore Botanic Gardens designated a <strong>UNESCO World Heritage Site</strong>, 2015.
          </li>
          <li>
            <span style={{ color: accentColor }}>→</span>{' '}
            Ford Factory assembled civilian cars until <strong>1980</strong>, then became the Former Ford Factory occupation museum.
          </li>
          <li>
            <span style={{ color: accentColor }}>→</span>{' '}
            Raffles Museum became the National Museum of Singapore; its collections now anchor national heritage narratives.
          </li>
        </ul>

        <p
          className="text-sm italic mt-6"
          style={{ color: 'var(--color-muted)' }}
        >
          The buildings remain. The questions they answer keep changing.
        </p>
      </div>
    </section>
  );
}
