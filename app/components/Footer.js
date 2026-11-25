import Container from "./Container";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await currentYear();

  return (
    <footer className="border-t border-rule bg-surface">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-muted sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink">Kiln Systems</span>
          <span>&middot;</span>
          <span>Full-Stack, Video, Signal &amp; Edge Engineering</span>
        </div>
        <p>&copy; {year} Kiln Systems. All rights reserved.</p>
      </Container>
    </footer>
  );
}
