import type { Institution, EmpireState } from '../types';

interface Props {
  institution: Institution;
  empire: EmpireState;
}

export default function InstitutionCard({ institution, empire }: Props) {
  const content = institution[empire];
  const accentColor = empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)';

  return (
    <article
      className="rounded border"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-accent)',
      }}
    >
      {/* Card header — static, does not crossfade */}
      <div
        className="px-6 pt-5 pb-3 border-b flex items-start justify-between gap-4"
        style={{ borderColor: 'var(--color-accent)' }}
      >
        <div>
          <div
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            {empire === 'british' ? '1819 – 1942 · British Colonial Period' : '1942 – 1945 · Japanese Occupation'}
          </div>
        </div>
        {/* Empire logic badge */}
        <span
          className="flex-shrink-0 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded"
          style={{
            fontFamily: 'var(--font-family-sans)',
            backgroundColor: accentColor,
            color: '#fff',
          }}
        >
          {empire === 'british' ? 'Empire as nature' : 'Empire as fate'}
        </span>
      </div>

      {/* Crossfading content block */}
      <div key={empire} className="fade-in px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <h2
            className="text-xl font-bold"
            style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
          >
            {content.institutionName}
          </h2>
          <span
            className="text-xs flex-shrink-0 pt-1"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            {content.periodLabel}
          </span>
        </div>

        <p
          className="text-sm italic mb-5"
          style={{ color: 'var(--color-muted)' }}
        >
          {content.tagline}
        </p>

        {/* Emphasis label inline */}
        <div className="mb-5">
          <span
            className="text-xs uppercase tracking-wide font-bold px-2 py-0.5 rounded"
            style={{
              fontFamily: 'var(--font-family-sans)',
              color: accentColor,
              border: `1px solid ${accentColor}`,
            }}
          >
            {content.emphasisLabel}
          </span>
        </div>

        {/* Body paragraphs */}
        <div className="space-y-4 mb-6">
          {content.bodyParagraphs.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote
          className="pl-4 my-5"
          style={{ borderLeft: `3px solid ${accentColor}` }}
        >
          <p className="text-sm italic leading-relaxed mb-2" style={{ color: 'var(--color-muted)' }}>
            {content.pullQuote}
          </p>
          <cite
            className="text-xs not-italic block"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            — {content.pullQuoteAttribution}
          </cite>
        </blockquote>
      </div>
    </article>
  );
}
