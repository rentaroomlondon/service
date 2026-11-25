import Container from "./Container";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Architecture and Limitations",
    text: "We map operator procedures, hardware specs, bandwidth restrictions, and data residency regulations before developing production code.",
  },
  {
    title: "Start a functional slice.",
    text: "Real sensor or camera feeds are processed into a useful web interface that you can test on-site in a matter of weeks.",
  },
  {
    title: "Harden it, then hand it over",
    text: "We set up automated deploys, monitoring and plain docs, so your own team can run the system without us.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-rule bg-surface py-16 sm:py-24">
      <Container>
        <div className="mb-12">
          <SectionHeading eyebrow="How We Work" title="One team, start to finish">
            Projects tend to stall when the hardware people, the ML people and the web people work for
            three different companies. We keep them on one team and get a rough end-to-end version working early.
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
