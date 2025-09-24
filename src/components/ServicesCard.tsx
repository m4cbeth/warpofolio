"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import Image from "next/image";
import type { ServiceSection } from "@/data/content-data";

export function ServicesCard({ section }: { section: ServiceSection }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-80px" }}
      transition={sectionTransition}
      className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6">
        <div className="flex-1 w-full">
          <h1 className="pl-4 pt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {section.h1}
          </h1>
          <h2 className="pl-6 mt-1 text-lg text-slate-700 dark:text-slate-300">
            {section.h2}
          </h2>
        </div>
        {section.img && (
          <div className="relative flex-1 w-full md:w-56 aspect-[16/10] rounded-md overflow-hidden">
            <Image src={section.img} alt="background image" fill className="object-cover" />
          </div>
        )}
      </div>
      <p className="mt-4 text-md text-slate-700 dark:text-slate-300">{section.body}</p>
    </motion.article>
  );
}

