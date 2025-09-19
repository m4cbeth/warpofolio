import { motion } from "framer-motion";
import { fadeIn, sectionTransition } from "@/lib/animations";

export function SocialProof({ logos }: { logos: string[] }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      transition={{ ...sectionTransition, delay: 0.1 }}
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mt-14 max-w-6xl"
    >
      <p className="text-center text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">As seen on</p>
      <div className="mt-5 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4">
        {logos.map((name) => (
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
  );
}
