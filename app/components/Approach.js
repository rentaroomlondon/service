import Container from "./Container";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Architecture & Constraints",
    text: "We map bandwidth limits, data residency rules, hardware specs, and operator workflows before writing production code.",
  },
  {
    title: "Working Vertical Slices",
    text: "Within weeks, real sensor or camera feeds flow through the processing pipeline into a usable web interface you can test on site.",
  },
  {
    title: "Hardening & Clean Handoff",
    text: "Automated deployments, observability dashboards, and clear documentation so your team owns the stack with confidence.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-rule bg-surface py-16 sm:py-24">
      <Container>
        <div className="mb-12">
          <SectionHeading eyebrow="How We Work" title="One team, zero handoff gaps">
            When hardware engineers, ML researchers, and web developers sit in separate companies,
            integration is where timelines break. We build vertical slices from day one.
          </SectionHeading>
        </div>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`border-l-2 pl-5 transition-colors hover:border-cobalt ${
                i === 0 ? "border-cobalt" : "border-rule"
              }`}
            >
              <span className="font-mono text-xs text-subtle">STEP 0{i + 1}</span>
              <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
