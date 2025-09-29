"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
    return (
    <section id="contact" className="border-t border-slate-100 dark:border-slate-900 md:py-20 scroll">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: "-80px" }}
          transition={sectionTransition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Book a Free Site Audit</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Fill out the form and I’ll reply within one business day.</p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
    )
}