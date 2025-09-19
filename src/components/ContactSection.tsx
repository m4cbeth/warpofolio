"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";

type FormData = {
  name: string;
  email: string;
  business: string;
  website: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", business: "", website: "", message: "" });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = (data: FormData) => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email.";
    if (!data.business.trim()) return "Please enter your business name.";
    if (data.website && !/^https?:\/\/.+\..+/.test(data.website)) return "Please enter a valid website URL (include http or https).";
    if (!data.message.trim()) return "Please include a brief message.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    const err = validateForm(form);
    if (err) return setFormError(err);

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setFormSuccess("Thanks! I’ll get back to you within 1 business day.");
      setForm({ name: "", email: "", business: "", website: "", message: "" });
    } catch {
      setFormError("Something went wrong. Please try again, or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20 scroll">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionTransition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Book a Free Site Audit</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Fill out the form and I’ll reply within one business day.</p>
        </motion.div>

        <div className="mx-auto mt-8 max-w-2xl">
          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                  placeholder="Your full name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="business" className="mb-1 block text-sm font-medium">Business Name</label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => setForm((f) => ({ ...f, business: e.target.value }))}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                  placeholder="Your company"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="website" className="mb-1 block text-sm font-medium">Website URL</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={form.website}
                  onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                  placeholder="https://example.com"
                  inputMode="url"
                  pattern="https?://.+"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                  placeholder="Tell me about your site and goals..."
                />
              </div>
            </div>
            {formError && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">{formError}</p>
            )}
            {formSuccess && (
              <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400" role="status">{formSuccess}</p>
            )}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {submitting ? "Sending..." : "Send Request"}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">Or email: hello@example.com</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
