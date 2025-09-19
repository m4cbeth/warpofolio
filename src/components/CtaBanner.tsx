import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";

export function CtaBanner() {
  return (
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
  );
}
