import Container from "./Container";
import BriefForm from "./BriefForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-cobalt">
              Get in touch
            </span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What are you building?
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Send us a rough sketch of the system, the hardware you have, or your timeline. You&apos;ll
              talk to a senior engineer, not a salesperson.
            </p>

            <dl className="space-y-3 pt-4 text-sm">
              <div className="flex items-center gap-3 text-muted">
                <dt className="rounded border border-rule bg-surface px-2 py-1 font-mono text-xs text-ink">
                  EMAIL
                </dt>
                <dd>
                  <a
                    href="mailto:hello@kilnsystems.io"
                    className="text-ink underline underline-offset-4 hover:text-cobalt"
                  >
                    hello@kilnsystems.io
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <dt className="rounded border border-rule bg-surface px-2 py-1 font-mono text-xs text-ink">
                  RESPONSE
                </dt>
                <dd>Within one business day</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <BriefForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
