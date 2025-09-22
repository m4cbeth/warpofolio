"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeUp, sectionTransition } from "@/lib/animations";
import { ProblemPoint } from "@/data/content-data";
import { Whoami } from "@/data/content-data";

type WhoamiProps = {
  whoamiBlurb: Whoami;
}

export function WhoAMI({whoamiBlurb}: WhoamiProps) {
    return (
      <section id="whoami" className="py-5 pb-10 ">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "10px" }}
          transition={sectionTransition}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, margin: "-80px" }}
            transition={sectionTransition}
            className="text-balance text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            {whoamiBlurb.himynameis}
          </motion.h1>
          
          <div className="mx-auto mt-4 max-w-lg text-left text-lg text-slate-700 dark:text-slate-300">
            {whoamiBlurb.other}
          </div>
         
        </motion.div>        
      </section>
)}

function Hero({ points }: { points: ProblemPoint[] }) {
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
            className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white"
          >
            Fix Your Website. Win More Clients.
          </motion.h1>
          <p className="mx-auto mt-4 max-w-2xl pt-5 text-pretty text-2xl text-slate-700 dark:text-slate-300">
            Most Calgary financial advisors have outdated sites.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-700 dark:text-slate-300">
            I help you modernize, optimize, and convert visitors
            into booked calls.
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
      </div>
    </section>
  );
}