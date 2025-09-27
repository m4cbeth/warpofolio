"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import { YourQuickChecklist } from "@/components/ProblemPoints";
import { ProblemPoint } from "@/data/content-data";
import GetStartedModal from "./GetStartedModal";

export function Hero({ points }: { points: ProblemPoint[] }) {
  return (
    <section id="home" className="relative overflow-hidden scroll">
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
            transition={sectionTransition}
            className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white"
          >
            Become the professional AI recommends
          </motion.h1>
          <p className="mx-auto mt-4 max-w-2xl pt-5 text-pretty text-2xl text-slate-700 dark:text-slate-300">
            AI, investors, and prospects all look for the same thing: 
            <br/>
            clarity, independence, and trust. 
            <br/>
            Let’s make sure your website communicates that.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-700 dark:text-slate-300">
            I help you modernize, optimize, and convert visitors
            into booked calls.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GetStartedModal />
            <a
              href="#services"
              className="ihnline-flex hidden items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <YourQuickChecklist points={points} />
      </div>
    </section>
  );
}
