"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

// Types

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

type CaseStudy = {
  title: string;
  result: string;
};

type FormData = {
  name: string;
  email: string;
  business: string;
  website: string;
  message: string;
};

// Animations

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const sectionTransition = { duration: 0.6, ease: easeOut };

// Data

const placeholderLogos = [
  "YYC Finance Network",
  "Prairie Portfolio",
  "Mountain Wealth",
  "Stampede Advisory",
];

const services = [
  {
    title: "Quick Win Website Fixes",
    desc: "Homepage refresh, booking form install, analytics setup.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "SEO & Visibility",
    desc: "Keyword optimization, Local SEO for Calgary, Google My Business tune-up.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Conversion Copywriting",
    desc: "Sharper headlines, CTA rewrites, email tripwires.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5h16M7 9h10M7 13h10M7 17h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Funnel Add-ons",
    desc: "Lead magnets, review widgets, waitlist builders.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16l-6 8v6l-4-2v-4L4 4z" />
      </svg>
    ),
  },
];

const caseStudies: CaseStudy[] = [
  { title: "Dentist site refresh", result: "→ 40% more bookings" },
  { title: "Law firm SEO", result: "→ Top 3 for “Calgary Family Lawyer”" },
  { title: "Advisor funnel add-ons", result: "→ 2.1x consult requests" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with JW was seamless. Our site looks modern and we’re seeing more booked calls already.",
    name: "Alex P.",
    role: "Principal, Wealth Advisory",
  },
  {
    quote:
      "He found quick wins we missed. The booking form and copy changes made a clear difference.",
    name: "Sandra L.",
    role: "Operations, Investment Firm",
  },
  {
    quote:
      "Practical SEO, not fluff. Local visibility improved within weeks — highly recommend.",
    name: "Mohammed R.",
    role: "Founder, Boutique Finance",
  },
];

// Theme hook

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: "light" | "dark" =
      stored === "light" || stored === "dark"
        ? (stored as "light" | "dark")
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initial);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return { theme, toggle };
}

export default function Page() {
  const { theme, toggle } = useTheme();

  // Testimonials carousel
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const currentTestimonial = testimonials[idx];

  // Contact form state
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    business: "",
    website: "",
    message: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = (data: FormData) => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email.";
    if (!data.business.trim()) return "Please enter your business name.";
    if (data.website && !/^https?:\/\/.+\..+/.test(data.website))
      return "Please enter a valid website URL (include http or https).";
    if (!data.message.trim()) return "Please include a brief message.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const err = validateForm(form);
    if (err) {
      setFormError(err);
      return;
    }

    setSubmitting(true);
    try {
      // Placeholder: integrate with your backend (Formspree, Nodemailer, or Next.js API route)
      await new Promise((r) => setTimeout(r, 800));
      setFormSuccess("Thanks! I’ll get back to you within 1 business day.");
      setForm({ name: "", email: "", business: "", website: "", message: "" });
    } catch (error) {
      setFormError("Something went wrong. Please try again, or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/85 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 font-semibold text-white dark:bg-white dark:text-slate-900">
              JW
            </div>
            <span className="sr-only">JW</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#home" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
              Home
            </a>
            <a href="#services" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
              Services
            </a>
            <a href="#contact" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg:white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Book a Free Site Audit
            </a>
            <button
              aria-label="Toggle dark mode"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2.5 py-2 text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                // Sun
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
                </svg>
              ) : (
                // Moon
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950" />
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={sectionTransition}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, ease: easeOut }}
                className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white"
              >
                Fix Your Website. Win More Clients.
              </motion.h1>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-700 dark:text-slate-300">
                Most Calgary financial advisors have outdated sites. I help you modernize, optimize, and convert
                visitors into booked calls.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Book a Free Site Audit
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mx-auto mt-14 max-w-6xl"
            >
              <p className="text-center text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                As seen on
              </p>
              <div className="mt-5 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4">
                {placeholderLogos.map((name) => (
                  <div
                    key={name}
                    className="flex h-10 items-center justify-center rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                    aria-label={name}
                    title={name}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              transition={sectionTransition}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Services tailored for Calgary advisors
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Quick wins first, then sustainable growth through SEO and conversion-focused copy.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={sectionTransition}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white transition group-hover:scale-105 dark:bg-white dark:text-slate-900">
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{s.desc}</p>
                  <div className="mt-4 text-xs font-medium text-slate-500 opacity-0 transition group-hover:opacity-100 dark:text-slate-400">
                    Learn more →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              transition={sectionTransition}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Case Studies</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Real outcomes from simple, focused improvements.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c) => (
                <motion.article
                  key={c.title}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={sectionTransition}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="aspect-[16/9] w-full rounded-md bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {c.title} <span className="text-slate-500 dark:text-slate-400">{c.result}</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    Replace with your summary and metrics. Add process highlights and a single, clear takeaway.
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              transition={sectionTransition}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">What clients say</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Short, specific testimonials build trust and credibility.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-10 max-w-3xl">
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-pretty text-lg text-slate-900 dark:text-white">“{currentTestimonial.quote}”</p>
                <footer className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  — {currentTestimonial.name}
                  {currentTestimonial.role ? `, ${currentTestimonial.role}` : ""}
                </footer>
              </motion.blockquote>

              <div className="mt-6 flex items-center justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      idx === i
                        ? "bg-slate-900 dark:bg-white"
                        : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              transition={sectionTransition}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-sm dark:border-slate-800 dark:from-white dark:to-slate-100 dark:text-slate-900"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold">Get a 48-Hour Website Audit & Fix Package</h3>
                <p className="mt-2 max-w-2xl text-slate-200 dark:text-slate-700">
                  Fast turnaround with a prioritized punchlist and implementation. Start with the highest-impact wins.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                  >
                    Start My Audit
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl dark:bg-slate-900/10" />
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              transition={sectionTransition}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text:white">
                Book a Free Site Audit
              </h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Fill out the form and I’ll reply within one business day.
              </p>
            </motion.div>

            <div className="mx-auto mt-8 max-w-2xl">
              <form
                onSubmit={onSubmit}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">
                      Name
                    </label>
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
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="block w-full rounded-md border border-slate-300 bg:white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="business" className="mb-1 block text-sm font-medium">
                      Business Name
                    </label>
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
                    <label htmlFor="website" className="mb-1 block text-sm font-medium">
                      Website URL
                    </label>
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
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">
                      Message
                    </label>
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
                  <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                    {formError}
                  </p>
                )}
                {formSuccess && (
                  <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400" role="status">
                    {formSuccess}
                  </p>
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
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 font-semibold text-white dark:bg-white dark:text-slate-900">
                  JW
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">JW Web & SEO</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Calgary-based web development, SEO, and conversion copywriting for financial advisors.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Calgary, AB</li>
                <li>hello@example.com</li>
                <li>+1 (403) 000-0000</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Follow</h4>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/example"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.61 4.09 5.5 2.98 5.5 1.87 5.5.98 4.61.98 3.5.98 2.39 1.87 1.5 2.98 1.5c1.11 0 2 .89 2 2zM.98 8.5h4v14h-4v-14zm7 0h3.83v1.91h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05v8.1h-4v-7.2c0-1.72-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.83v7.32h-4v-14z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@example"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 00.5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 002.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 002.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7L16 12l-6.5 3.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-7xl px-4 md:px-6">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} JW Web & SEO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
