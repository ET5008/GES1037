import type { EmpireState, EmpireLabels } from '../types';

interface Props {
  empire: EmpireState;
  onToggle: () => void;
  labels: EmpireLabels;
}

export default function EmpireToggle({ empire, onToggle, labels }: Props) {
  return (
    <div className="flex flex-col items-start sm:items-end gap-1">
      <p
        className="text-xs uppercase tracking-widest"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
      >
        Imperial frame
      </p>
      <button
        onClick={onToggle}
        role="switch"
        aria-checked={empire === 'japanese'}
        aria-label={`Toggle imperial frame. Currently: ${empire === 'british' ? labels.british : labels.japanese}`}
        className="flex rounded overflow-hidden border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          borderColor: empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)',
          ['--tw-ring-color' as string]: empire === 'british' ? 'var(--color-british)' : 'var(--color-japanese)',
        }}
      >
        {/* British side */}
        <span
          className="px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-family-sans)',
            backgroundColor: empire === 'british' ? 'var(--color-british)' : 'var(--color-surface)',
            color: empire === 'british' ? '#fff' : 'var(--color-muted)',
          }}
        >
          {labels.british}
        </span>

        {/* Divider */}
        <span
          className="flex items-center px-1 text-xs"
          style={{
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-muted)',
          }}
        >
          ⇄
        </span>

        {/* Japanese side */}
        <span
          className="px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-family-sans)',
            backgroundColor: empire === 'japanese' ? 'var(--color-japanese)' : 'var(--color-surface)',
            color: empire === 'japanese' ? '#fff' : 'var(--color-muted)',
          }}
        >
          {labels.japanese}
        </span>
      </button>
    </div>
  );
}
