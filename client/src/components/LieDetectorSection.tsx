import { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
  Legend,
} from 'recharts';
import type { ChartDataset, ChartDataPoint, LieDetectorView } from '../types';
import { LIE_DETECTOR_NARRATIVE } from '../data/constants';

interface Props {
  datasets: ChartDataset[];
}

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ChartDataPoint;
}

function PendingDot({ cx = 0, cy = 0, payload }: DotProps) {
  if (!payload) return null;
  if (payload.pending) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="var(--color-parchment)"
        stroke="var(--color-pending)"
        strokeWidth={2}
      />
    );
  }
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="currentColor"
      stroke="none"
    />
  );
}

function BritishDot(props: DotProps) {
  return <PendingDot {...props} />;
}

function JapaneseDot(props: DotProps) {
  return <PendingDot {...props} />;
}

interface TooltipPayloadEntry {
  payload?: ChartDataPoint;
  value?: number;
  name?: string;
  color?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
  label?: number;
}) {
  if (!active || !payload || payload.length === 0) return null;

  const entry = payload[0];
  const point = entry?.payload;

  return (
    <div
      className="text-xs p-3 rounded shadow-md max-w-xs"
      style={{
        backgroundColor: 'var(--color-surface-dark)',
        border: '1px solid var(--color-accent)',
        color: 'var(--color-ink)',
        fontFamily: 'var(--font-family-sans)',
      }}
    >
      <div className="font-bold mb-1">{label}</div>
      {payload.map((e, i) => (
        <div key={i} style={{ color: e.color }}>
          {e.name}: {e.value}
        </div>
      ))}
      {point?.pending && (
        <div className="mt-2 pt-2 border-t" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-pending)' }}>
          ✦ {point.pendingNote}
        </div>
      )}
    </div>
  );
}

function EconomyChart({ dataset }: { dataset: ChartDataset }) {
  const britishPoints = dataset.points.filter(p => p.empire === 'british');
  const japanesePoints = dataset.points.filter(p => p.empire === 'japanese');

  const hasPending = dataset.points.some(p => p.pending);

  const allYears = dataset.points.map(p => p.year);
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);

  const merged: Record<number, { year: number; british?: number; japanese?: number; britishPending?: boolean; japanesePending?: boolean }> = {};
  for (const p of britishPoints) {
    merged[p.year] = { ...merged[p.year], year: p.year, british: p.value, britishPending: p.pending };
  }
  for (const p of japanesePoints) {
    merged[p.year] = { ...merged[p.year], year: p.year, japanese: p.value, japanesePending: p.pending };
  }

  const chartData = Object.values(merged).sort((a, b) => a.year - b.year);

  return (
    <div className="mb-10">
      <h3
        className="text-sm font-bold mb-1"
        style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-sans)' }}
      >
        {dataset.title}
      </h3>
      <p
        className="text-xs mb-4"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
      >
        {dataset.unit}
      </p>

      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <XAxis
              dataKey="year"
              type="number"
              domain={[minYear, maxYear]}
              tickCount={6}
              tick={{ fontSize: 11, fill: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
              width={36}
            />
            <ReferenceLine
              x={1942}
              stroke="var(--color-accent)"
              strokeDasharray="4 3"
              label={{
                value: '1942',
                position: 'top',
                fontSize: 10,
                fill: 'var(--color-muted)',
                fontFamily: 'var(--font-family-sans)',
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                fontSize: 11,
                fontFamily: 'var(--font-family-sans)',
                color: 'var(--color-muted)',
              }}
            />
            <Line
              type="monotone"
              dataKey="british"
              name="British period"
              stroke="var(--color-british)"
              strokeWidth={2}
              connectNulls
              dot={(props) => <BritishDot {...props} payload={props.payload?.british !== undefined ? { ...props.payload, pending: props.payload.britishPending ?? false, empire: 'british', value: props.payload.british } : undefined} />}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="japanese"
              name="Occupation period"
              stroke="var(--color-japanese)"
              strokeWidth={2}
              connectNulls
              dot={(props) => <JapaneseDot {...props} payload={props.payload?.japanese !== undefined ? { ...props.payload, pending: props.payload.japanesePending ?? false, empire: 'japanese', value: props.payload.japanese } : undefined} />}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {hasPending && (
        <p
          className="text-xs mt-2 italic"
          style={{ color: 'var(--color-pending)', fontFamily: 'var(--font-family-sans)' }}
        >
          ✦ Hollow points indicate figures under active verification.
        </p>
      )}

      <p
        className="text-xs mt-1"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
      >
        {dataset.sourceNote}
      </p>
    </div>
  );
}

export default function LieDetectorSection({ datasets }: Props) {
  const [view, setView] = useState<LieDetectorView>('narrative');

  const hasPendingData = datasets.some(d => d.points.some(p => p.pending));

  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-family-serif)' }}
        >
          The Lie Detector
        </h2>
        <p
          className="text-sm"
          style={{ color: 'var(--color-muted)' }}
        >
          Both empires produced elaborate narratives about science serving collective good. The economy was the lie detector.
        </p>
      </div>

      {/* View toggle */}
      <div className="flex gap-0 mb-6 rounded overflow-hidden border" style={{ borderColor: 'var(--color-accent)', display: 'inline-flex' }}>
        <button
          onClick={() => setView('narrative')}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors"
          style={{
            fontFamily: 'var(--font-family-sans)',
            backgroundColor: view === 'narrative' ? 'var(--color-accent)' : 'var(--color-surface)',
            color: view === 'narrative' ? '#fff' : 'var(--color-muted)',
            cursor: 'pointer',
            border: 'none',
          }}
          aria-pressed={view === 'narrative'}
        >
          What they said
        </button>
        <button
          onClick={() => setView('economy')}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors"
          style={{
            fontFamily: 'var(--font-family-sans)',
            backgroundColor: view === 'economy' ? 'var(--color-accent)' : 'var(--color-surface)',
            color: view === 'economy' ? '#fff' : 'var(--color-muted)',
            cursor: 'pointer',
            border: 'none',
          }}
          aria-pressed={view === 'economy'}
        >
          What the economy shows
        </button>
      </div>

      {view === 'narrative' && (
        <div key="narrative" className="fade-in">
          <div
            className="rounded border p-6 mb-6"
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-british)' }}
          >
            <h3
              className="text-xs uppercase tracking-widest mb-3 font-bold"
              style={{ color: 'var(--color-british)', fontFamily: 'var(--font-family-sans)' }}
            >
              {LIE_DETECTOR_NARRATIVE.britishHeading}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              {LIE_DETECTOR_NARRATIVE.britishBody}
            </p>
          </div>

          <div
            className="rounded border p-6"
            style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-japanese)' }}
          >
            <h3
              className="text-xs uppercase tracking-widest mb-3 font-bold"
              style={{ color: 'var(--color-japanese)', fontFamily: 'var(--font-family-sans)' }}
            >
              {LIE_DETECTOR_NARRATIVE.japaneseHeading}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              {LIE_DETECTOR_NARRATIVE.japaneseBody}
            </p>
          </div>
        </div>
      )}

      {view === 'economy' && (
        <div key="economy" className="fade-in">
          {hasPendingData && (
            <div
              className="rounded border p-3 mb-6 text-xs"
              style={{
                backgroundColor: '#fdf6ec',
                borderColor: 'var(--color-pending)',
                color: 'var(--color-pending)',
                fontFamily: 'var(--font-family-sans)',
              }}
            >
              <strong>Verification notice:</strong> Figures marked ✦ (hollow points on charts) are approximate estimates cited in secondary literature. They have not been confirmed against primary archival sources. Do not cite as established fact.
            </div>
          )}
          {datasets.map(dataset => (
            <EconomyChart key={dataset.id} dataset={dataset} />
          ))}
        </div>
      )}
    </section>
  );
}
