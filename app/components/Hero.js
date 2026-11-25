import Container from "./Container";
import PipelineInspector from "./PipelineInspector";

const highlights = [
  { label: "Delivery", value: "End-to-end teams" },
  { label: "Runtime", value: "Edge, On-Prem & Cloud" },
  { label: "Ownership", value: "100% client IP" },
];

export default function Hero() {
  return (
    <section className="dot-grid relative border-b border-rule">
      <Container className="pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="h-2 w-2 animate-breathe rounded-full bg-emerald-600" />
              SYSTEMS &amp; SOFTWARE ENGINEERING
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Software from the sensor to the browser.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We design, build, and ship full-stack applications, live video platforms, signal
              pipelines, and edge AI as one cohesive product, so you don&apos;t have to stitch
              three vendors together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-md bg-cobalt px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cobalt-dark"
              >
                Book a technical call
              </a>
              <a
                href="#capabilities"
                className="rounded-md border border-rule bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-zinc-400"
              >
                Explore capabilities <span className="ml-1.5 font-mono text-muted">&darr;</span>
              </a>
            </div>

            <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-rule/80 pt-6">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-mono text-xs uppercase text-subtle">{h.label}</dt>
                  <dd className="mt-0.5 text-sm font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <PipelineInspector />
          </div>
        </div>
      </Container>
    </section>
  );
}
