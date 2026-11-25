export default function CapabilityCard({ number, title, icon: Icon, blurb, points, stack }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-rule bg-surface p-6 transition duration-200 hover:border-zinc-400 hover:shadow-[0_6px_20px_-6px_rgba(9,9,11,0.06)]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-subtle">{number}</span>
          <Icon />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{blurb}</p>

        <ul className="mt-4 space-y-2 text-sm text-ink/90">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 font-mono text-xs text-cobalt">&mdash;</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-rule pt-4">
        {stack.map((tool) => (
          <span
            key={tool}
            className="rounded border border-rule bg-paper px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
