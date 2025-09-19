import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import type { ServiceItem } from "@/data/content";

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      transition={sectionTransition}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white transition group-hover:scale-105 dark:bg-white dark:text-slate-900">
        {item.icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
      <div className="mt-4 text-xs font-medium text-slate-500 opacity-0 transition group-hover:opacity-100 dark:text-slate-400">
        Learn more →
      </div>
    </motion.div>
  );
}

export function ServicesSection({ items }: { items: ServiceItem[] }) {
  return (
    <section id="services" className="border-t border-slate-100 py-16 dark:border-slate-900 md:py-20 scroll">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          transition={sectionTransition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Services tailored for Calgary advisors
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Quick wins first, then sustainable growth through SEO and conversion-focused copy.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <ServiceCard key={s.title} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
