import { motion } from "framer-motion";
import { fadeIn, sectionTransition } from "@/lib/animations";
import { ProblemPoint } from "@/data/content-data";

export function YourQuickChecklist({ points }: { points: ProblemPoint[] }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      transition={{ ...sectionTransition, delay: 0.1 }}
      viewport={{ once: false, margin: "-80px" }}
      className="mx-auto mt-14 max-w-6xl"
    >
      <p className="text-center text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Does your website
      </p>
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {points.map((point) => (
          <div
            key={point.question}
            className="flex w-full h-15 items-center justify-center text-lg rounded border border-slate-200 bg-white font-lg text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
            aria-label={point.question}
            title={point.question}
          >
            {point.question}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
