import { useState } from 'react';
import type { EmpireState } from './types';
import { ESSAY_META, INSTITUTIONS, CODA, REFERENCES, CHART_DATASETS, EMPIRE_LABELS } from './data/constants';
import EmpireToggle from './components/EmpireToggle';
import InstitutionCard from './components/InstitutionCard';
import LieDetectorSection from './components/LieDetectorSection';
import MuseumVsFactorySection from './components/MuseumVsFactorySection';
import ClosingCoda from './components/ClosingCoda';
import ReferencesSection from './components/ReferencesSection';

export default function App() {
  const [empire, setEmpire] = useState<EmpireState>('british');

  const toggle = () => setEmpire(e => (e === 'british' ? 'japanese' : 'british'));

  const accentColor = empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)';

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      {/* Sticky header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: 'var(--color-surface-dark)',
          borderColor: 'var(--color-accent)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
              >
                {ESSAY_META.course}
              </p>
              <h1
                className="text-lg font-bold leading-tight"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
              >
                {ESSAY_META.title}
              </h1>
            </div>
            <EmpireToggle empire={empire} onToggle={toggle} labels={EMPIRE_LABELS} />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Subtitle + intro */}
        <section className="mb-14">
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            {ESSAY_META.subtitle}
          </p>

          <div className="w-12 h-px mb-8" style={{ backgroundColor: accentColor }} />

          {ESSAY_META.introductionParagraphs.map((p, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              {p}
            </p>
          ))}
        </section>

        {/* Active frame indicator */}
        <div
          className="flex flex-wrap items-center gap-3 mb-10 py-3 px-4 rounded"
          style={{ backgroundColor: 'var(--color-surface)', border: `1px solid ${accentColor}` }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            Current frame:
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: accentColor, fontFamily: 'var(--font-family-sans)' }}
          >
            {empire === 'british' ? EMPIRE_LABELS.british : EMPIRE_LABELS.japanese}
          </span>
          <span
            className="text-xs ml-auto hidden sm:block"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            Toggle above to reframe all three institutions simultaneously
          </span>
        </div>

        {/* Institution cards */}
        <section className="mb-16">
          <h2
            className="text-xs uppercase tracking-widest mb-8"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            Three institutions — one toggle
          </h2>
          <div className="flex flex-col gap-10">
            {INSTITUTIONS.map(inst => (
              <InstitutionCard key={inst.id} institution={inst} empire={empire} />
            ))}
          </div>
        </section>

        {/* Lie detector */}
        <LieDetectorSection datasets={CHART_DATASETS} />

        {/* Museum vs Factory */}
        <MuseumVsFactorySection empire={empire} />

        {/* Closing coda */}
        <ClosingCoda empire={empire} coda={CODA} />

        {/* References */}
        <ReferencesSection references={REFERENCES} />
      </main>
    </div>
  );
}
