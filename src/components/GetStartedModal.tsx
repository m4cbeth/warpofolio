"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ContactSection } from "./ContactSection"

export default function GetStartedModal() {
    const [isVisible, setIsVisible] = useState(false)

    // Close on Escape key
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setIsVisible(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    return (
        <div className="relative">
            {/* Trigger */}
            <motion.button
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isVisible}
                className="inline-flex items-center justify-center rounded-md hover:cursor-pointer hover:scale-110 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                onClick={() => setIsVisible(true)}
                whileTap={{ y: 0.9 }}
            >
                Let’s get you started
            </motion.button>

            <AnimatePresence initial={false}>
                {isVisible ? (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[5px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsVisible(false)}
                        />

                        {/* Dialog */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0.95, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 8 }}
                        >
                            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl ring-1 ring-black/5 dark:bg-slate-950 dark:ring-white/10">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg italic font-semibold text-slate-900 dark:text-white">
                                        Let’s Get Started
                                    </h2>
                                    <button
                                        type="button"
                                        aria-label="Close"
                                        onClick={() => setIsVisible(false)}
                                        className="rounded px-2 p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                                    <ContactSection/>
                                </div>
                                <button
                                        type="button"
                                        onClick={() => setIsVisible(false)}
                                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                                    >
                                        Close
                                    </button>
                                <div className="mt-6 flexx hidden justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsVisible(false)}
                                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg:white dark:text-slate-900 dark:hover:bg-slate-200"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                ) : null}
            </AnimatePresence>
        </div>
    )
}
