"use client";

import { useState } from "react";
import { layers } from "@/app/data/pipeline";

export default function PipelineInspector() {
  const [activeId, setActiveId] = useState(layers[0].id);
  const active = layers.find((l) => l.id === activeId);

  return (
    <div className="rounded-xl border border-rule bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">
            Interactive Reference
          </span>
          <h2 className="text-sm font-semibold">System Pipeline Inspector</h2>
        </div>
        <span className="rounded border border-rule bg-zinc-100 px-2 py-0.5 font-mono text-xs text-muted">
          v2.4
        </span>
      </div>

      <p className="mb-4 mt-3 text-xs text-muted">
        Select a layer below to inspect how hardware telemetry and camera streams move into
        user-facing software.
      </p>

      <div className="space-y-2" role="group" aria-label="Architecture layers">
        {layers.map((layer, i) => {
          const selected = layer.id === activeId;
          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveId(layer.id)}
              className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-all duration-150 ${
                selected ? "border-cobalt bg-blue-50" : "border-rule bg-paper hover:border-zinc-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded font-mono text-xs font-medium ${
                    selected ? "bg-cobalt text-white" : "bg-zinc-200"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-sm font-medium">{layer.name}</div>
                  <div className="text-xs text-muted">{layer.summary}</div>
                </div>
              </div>
              <span className="hidden font-mono text-xs text-subtle sm:inline">{layer.protocol}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-4 rounded-lg bg-zinc-900 p-3.5 font-mono text-xs leading-relaxed text-zinc-100">
        <div className="mb-1.5 flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-400">
          <span>{active.readout}</span>
          <span className="text-emerald-400">{active.latency}</span>
        </div>
        <p className="font-sans text-xs leading-relaxed text-zinc-300">{active.detail}</p>
      </div>
    </div>
  );
}
