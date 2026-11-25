"use client";

import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks } from "@/app/data/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cobalt"
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            className="rounded-md border border-rule bg-surface p-2 hover:bg-zinc-100 md:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              />
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="space-y-3 border-t border-rule bg-surface px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-1.5 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
