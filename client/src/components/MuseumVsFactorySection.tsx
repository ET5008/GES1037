import type { EmpireState } from '../types';
import { SPACE_CARDS } from '../data/constants';

interface Props {
  empire: EmpireState;
}

export default function MuseumVsFactorySection({ empire }: Props) {
  const accentColor = empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)';

  return (
    <section className="mb-16">
      <h2
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
      >
        The Same Address, Two Regimes
      </h2>
      <p
        className="text-sm mb-8"
        style={{ color: 'var(--color-muted)' }}
      >
        Miles apart, same occupation. The museum was <em>performed</em> — preserved and publicised. The factory was <em>extracted</em> — seized and worked. The contrast reveals what pan-Asian ideology meant in practice.
      </p>

      <div className="flex flex-col gap-8">
        {SPACE_CARDS.map(card => (
          <div
            key={card.name}
            className="rounded border overflow-hidden"
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-accent)' }}
          >
            {/* Card title */}
            <div
              className="px-6 py-4 border-b"
              style={{ borderColor: 'var(--color-accent)' }}
            >
              <h3
                className="text-base font-bold"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
              >
                {card.name}
              </h3>
              <p
                className="text-xs mt-1"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
              >
                {card.address}
              </p>
            </div>

            {/* Two-column split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': '1', borderColor: 'var(--color-accent)' } as React.CSSProperties}>
              {/* British column */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      backgroundColor: 'var(--color-british)',
                      color: '#fff',
                    }}
                  >
                    {card.britishVerb}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
                  >
                    Under the British
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-ink)' }}>
                  {card.britishFunction}
                </p>
                <p className="text-xs italic" style={{ color: 'var(--color-muted)' }}>
                  {card.britishNote}
                </p>
              </div>

              {/* Japanese column */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                    style={{
                      fontFamily: 'var(--font-family-sans)',
                      backgroundColor: 'var(--color-japanese)',
                      color: '#fff',
                    }}
                  >
                    {card.japaneseVerb}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
                  >
                    Under the Japanese
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-ink)' }}>
                  {card.japaneseFunction}
                </p>
                <p className="text-xs italic" style={{ color: 'var(--color-muted)' }}>
                  {card.japaneseNote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interpretive note */}
      <div
        className="mt-8 p-5 rounded border-l-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: accentColor,
          borderLeftWidth: '4px',
          borderStyle: 'solid',
        }}
      >
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          The museum and the factory were never far apart — a few miles of occupied Singapore separated them. One was publicised as proof of Japanese cultural stewardship. The other was simply taken. The ideology of the Co-Prosperity Sphere expressed itself in the gap between these two treatments.
        </p>
      </div>
    </section>
  );
}
