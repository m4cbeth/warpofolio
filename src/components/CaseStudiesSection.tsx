import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import type { CaseStudy } from "@/data/content-data";

export function CaseStudiesSection({ items }: { items: CaseStudy[] }) {
  return (
    <section id="casestudies" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
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
          <p className="mt-3 text-slate-700 dark:text-slate-300">Real outcomes from simple, focused improvements.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
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
  );
}
