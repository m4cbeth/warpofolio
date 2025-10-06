import { m } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import type { Reasons } from "@/data/content-data";
import Image from "next/image";


export function ReasonsSection({ items }: { items: Reasons[] }) {
  return (
    <section id="reasons" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-80px" }}
          transition={sectionTransition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Proven Approaches
          </h2>
          <p className="mt-3 text-slate-950 dark:text-slate-300">
            Simple, focused improvements lead to real outcomes
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((improvement) => (
            <div key={improvement.title} className="eminem relative bg-amber-500/0 glow-card ">
              <motion.article
                key={improvement.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, margin: "-80px" }}
                transition={sectionTransition}
                className="rounded-xl border relative hover:scale-105 transition border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
               <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
                <Image
                  src={improvement.image}
                  alt={improvement.imgalt}
                  fill
                  className="object-cover"
                />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                  {improvement.title}
                  <div className="text-slate-600 dark:text-slate-400">
                    {improvement.result}
                  </div>
                </h3>
                <p className="mt-2 text-md text-slate-950 dark:text-slate-300">
                  {improvement.explain}
                </p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
