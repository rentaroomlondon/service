"use client";

import { useState } from "react";
import { capabilities } from "./Capabilities";

const scopes = capabilities.map((c) => c.title);
const emptyForm = { name: "", email: "", notes: "" };

const inputClass =
  "w-full rounded-md border border-rule bg-paper px-3.5 py-2.5 text-sm placeholder:text-zinc-400 transition-colors focus:border-cobalt focus:bg-white";

export default function BriefForm() {
  const [form, setForm] = useState(emptyForm);
  const [picked, setPicked] = useState([]);
  const [status, setStatus] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleScope = (scope) =>
    setPicked((prev) => (prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]));

  function handleSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !looksLikeEmail || !form.notes.trim()) {
      setStatus({
        type: "error",
        message: "Please add your name, a work email we can reply to, and a short note about your system.",
      });
      return;
    }

    const areas = picked.length ? ` You picked: ${picked.join(", ")}.` : "";
    setStatus({
      type: "success",
      message: `Thanks, ${name}. An engineer will read your brief and reply to ${email} within one business day.${areas}`,
    });
    setForm(emptyForm);
    setPicked([]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-xl border border-rule bg-surface p-6 sm:p-8"
    >
      <fieldset>
        <legend className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
          Areas of scope (select any)
        </legend>
        <div className="flex flex-wrap gap-2">
          {scopes.map((scope) => {
            const on = picked.includes(scope);
            return (
              <button
                key={scope}
                type="button"
                aria-pressed={on}
                onClick={() => toggleScope(scope)}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  on ? "border-cobalt bg-blue-50 text-cobalt" : "border-rule bg-paper hover:border-zinc-400"
                }`}
              >
                {scope}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alex Rivera"
            value={form.name}
            onChange={update}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            value={form.email}
            onChange={update}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-xs font-medium">
          System overview *
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          required
          placeholder="What cameras or sensors are you working with, where will it run, and what are you trying to build?"
          value={form.notes}
          onChange={update}
          className={inputClass}
        />
      </div>

      {status && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`rounded-lg border p-3.5 text-xs leading-relaxed ${
            status.type === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : "border-emerald-200 bg-emerald-50 text-emerald-900"
          }`}
        >
          {status.message}
        </p>
      )}

      <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
        <span className="text-xs text-subtle">Happy to sign an NDA before we get into the details.</span>
        <button
          type="submit"
          className="rounded-md bg-cobalt px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cobalt-dark"
        >
          Send project brief
        </button>
      </div>
    </form>
  );
}
