"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import type { Testimonial } from "@/data/content-data";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[idx];

  return (
    <section className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-80px" }}
          transition={sectionTransition}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            What you’ll be saying
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Impressions shared by those I’ve worked with.
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
            <p className="text-pretty text-lg text-slate-900 dark:text-white">“{current.quote[0]}</p>
            <p className="text-pretty text-lg text-slate-900 dark:text-white">{current.quote[1]}”</p>
            <footer className="mt-4 text-sm text-slate-600 dark:text-slate-300">— {current.name}{current.role ? `, ${current.role}` : ""}</footer>
          </motion.blockquote>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
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
  );
}
