"use client";

import { useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CapabilityCard from "./CapabilityCard";
import { capabilities, categories } from "@/app/data/capabilities";

export default function Capabilities() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="capabilities" className="border-b border-rule py-16 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Capabilities" title="Six disciplines under one engineering roof">
            Engage us for a single technical bottleneck or an entire vertical product, from
            hardware ingest to customer dashboard.
          </SectionHeading>

          <div className="flex flex-wrap gap-2" aria-label="Filter capabilities">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === cat.id
                    ? "border-ink bg-ink text-white"
                    : "border-rule bg-surface text-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) =>
            filter === "all" || item.category === filter ? (
              <CapabilityCard key={item.title} number={String(i + 1).padStart(2, "0")} {...item} />
            ) : null
          )}
        </div>
      </Container>
    </section>
  );
}
