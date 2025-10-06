import { m } from "framer-motion";
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
      <p className="text-center text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Does your website
      </p>
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {points.map((point) => (
          <div key={point.question} className="flex flex-col w-full p-4 items-center justify-center text-lg rounded border border-slate-200 bg-white font-lg text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50">
            <h2 className=" font-bold text-2xl border-b-2">
              {point.question}
            </h2>
            <p className="font-thin text-pretty mx-1 sm:ml-3">
              {point.blurb}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
