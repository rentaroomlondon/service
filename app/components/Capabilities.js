"use client";

import { useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CapabilityCard from "./CapabilityCard";
import { ChipIcon, LayoutIcon, NodesIcon, ServerIcon, VideoIcon, WaveIcon } from "./icons";

const categories = [
  { id: "all", label: "All (6)" },
  { id: "software", label: "Software & Cloud" },
  { id: "media", label: "Video & Signals" },
  { id: "intelligence", label: "AI & Edge" },
];

export const capabilities = [
  {
    title: "Full stack development",
    category: "software",
    icon: LayoutIcon,
    blurb: "Web apps, mobile apps, APIs and admin dashboards, shipped as one product instead of three projects.",
    points: ["Customer portals and internal tools", "REST and live data APIs", "Role based access and audit trails"],
    stack: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Video management",
    category: "media",
    icon: VideoIcon,
    blurb: "Platforms that take in camera streams, store them, and let people find and replay the moment that matters.",
    points: ["Camera ingest, live view and recording", "Event search and clip export", "Fleets of cameras across many sites"],
    stack: ["RTSP", "WebRTC", "HLS", "FFmpeg", "GStreamer"],
  },
  {
    title: "Signal processing",
    category: "media",
    icon: WaveIcon,
    blurb: "We turn noisy sensor, thermal and audio data into clean signals your software can act on.",
    points: ["Filtering, FFT and peak detection", "Thermal and audio analysis", "Combining several sensors into one reading"],
    stack: ["Python", "NumPy", "SciPy", "C++"],
  },
  {
    title: "AI automation",
    category: "intelligence",
    icon: NodesIcon,
    blurb: "Models and workflows that take over repetitive decisions, with a person kept in the loop where it counts.",
    points: ["Computer vision and event detection", "Document and form processing", "Alert routing and report drafting"],
    stack: ["PyTorch", "ONNX", "LLM APIs"],
  },
  {
    title: "Edge and IoT",
    category: "intelligence",
    icon: ChipIcon,
    blurb: "Run the model next to the sensor so the system keeps working when the network does not.",
    points: ["Inference on gateways and small devices", "Device fleets with remote updates", "Sensor data that stays on site"],
    stack: ["MQTT", "ONNX Runtime", "Linux"],
  },
  {
    title: "Cloud and operations",
    category: "software",
    icon: ServerIcon,
    blurb: "Deployment, monitoring and data hosting set up where your rules say the data has to live.",
    points: ["Container based releases", "Logs, metrics and alerting", "Hosting in the region you choose"],
    stack: ["Docker", "CI/CD", "Linux"],
  },
];

export default function Capabilities() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="capabilities" className="border-b border-rule py-16 sm:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Capabilities" title="Six things we do, all in-house">
            Bring us one tricky technical problem or a whole product. We can cover everything from
            the hardware feed to the dashboard your customers log into.
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
