"use client";

import { m } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
// import Image from "next/image";
import type { ServiceSection } from "@/data/content-data";

export function ServicesCard({ section }: { section: ServiceSection }) {
  return (
    <m.article
      id={section.id}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: "-80px" }}
      transition={sectionTransition}
      className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 glow-card"
    >

      <div
        className="relative w-full py-10 bg-center bg-cover"
        style={{ backgroundImage: `url('${section.img}')` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">
            {section.h1}
          </h1>
          <h2 className="text-2xl mt-2 font-thin">
            {section.h2}
          </h2>
        </div>
      </div>


      {/* Body */}
      <p className="px-4 mt-4 text-md text-slate-700 dark:text-slate-300">
        {section.body}
      </p>
      
    </m.article>
    
  );
}


