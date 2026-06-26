import type { Reference } from '../types';

interface Props {
  references: Reference[];
}

export default function ReferencesSection({ references }: Props) {
  return (
    <section
      className="border-t pt-10"
      style={{ borderColor: 'var(--color-accent)' }}
    >
      <h2
        className="text-xs uppercase tracking-widest mb-6"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
      >
        Works Cited
      </h2>
      <ol className="space-y-3 list-none pl-0">
        {references.map(ref => (
          <li
            key={ref.id}
            className="text-xs leading-relaxed"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-family-sans)' }}
          >
            {ref.author} ({ref.year}).{' '}
            <em>{ref.title}</em>
            {ref.publisher ? `. ${ref.publisher}.` : '.'}
            {ref.url && (
              <>
                {' '}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Link
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
