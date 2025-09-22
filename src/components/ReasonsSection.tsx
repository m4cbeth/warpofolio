import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import type { Reasons } from "@/data/content-data";

export function ReasonsSection({ items }: { items: Reasons[] }) {
  return (
    <section id="reasons" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-80px" }}
          transition={sectionTransition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Proven Approaches</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Simple, focused improvements lead to real outcomes</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((improvement) => (
            <motion.article
              key={improvement.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, margin: "-80px" }}
              transition={sectionTransition}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[16/9] w-full rounded-md bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {improvement.title} <span className="text-slate-500 dark:text-slate-400">{improvement.result}</span>
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {improvement.explain}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
