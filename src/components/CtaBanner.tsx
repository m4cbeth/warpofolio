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
          className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-sm dark:border-slate-800 dark:from-slate-300 dark:to-gray-500 dark:text-slate-900"
        >
          <div className="relative z-10">
            <div className="hidden w-10 h h-10 right-0.5 bottom-1/2 -z-10 bg-green-400">
              image/icon could go here
            </div>
            <div className="relative inline-block">
              {/* highlight block */}
            <div className="absolute w-full h-full bg-slate-600 dark:bg-gray-300 translate-3 -z-10"></div>
              <h3 className="text-4xl font-light tracking-tighter">
                Get a 48-Hour Website Audit & Fix Package
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="mt-5 font-semibold text-lg max-w-2xl text-slate-200 dark:text-slate-800">
                Fast turnaround with a prioritized punchlist and implementation.
              </p>
              <p className="mt-2 font-semibold text-lg max-w-2xl text-slate-200 dark:text-slate-800 text-center">
                Start with the highest-impact wins.
              </p>
            </div>
            <div className="flex">
              <div className="mt-6 mx-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-lg font-thing italic text-slate-900 shadow-sm transition hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Start My Audit
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl dark:bg-slate-900/10" />
        </motion.div>
      </div>
    </section>
  );
}
