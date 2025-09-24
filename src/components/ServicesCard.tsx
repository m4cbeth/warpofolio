"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import Image from "next/image";
import type { ServiceSection } from "@/data/content-data";

export function ServicesCard({ section }: { section: ServiceSection }) {
  return (
    <motion.article
      id={section.id}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-80px" }}
      transition={sectionTransition}
      className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="hidden md:flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6">
        {/* Text column */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="pl-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {section.h1}
          </h1>
          <h2 className="pl-4 mt-1 text-lg font-black hidden text-slate-700 dark:text-slate-300">
            {section.h2}
          </h2>
        </div>

        {/* Image column */}
        {section.img && (
          <div className="relative flex-1 w-full md:w-56 aspect-[16/10] rounded-md overflow-hidden">
            <Image
              src={section.img}
              alt={section.imgalt}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div
        className="md:hidden relative w-full py-10 bg-center bg-cover"
        style={{ backgroundImage: `url('${section.img}')` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">
            {section.h1}
          </h1>
          <h2 className="text-2xl mt-2">
            {section.h2}
          </h2>
        </div>
      </div>


      {/* Body */}
      <p className="px-4 mt-4 text-md text-slate-700 dark:text-slate-300">
        {section.body}
      </p>
      
    </motion.article>
    
  );
}


