export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-xs font-medium uppercase tracking-wider text-cobalt">
        {eyebrow}
      </span>
      <h2 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children && <p className="mt-2 text-sm text-muted sm:text-base">{children}</p>}
    </div>
  );
}
