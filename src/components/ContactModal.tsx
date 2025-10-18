"use client"

import { AnimatePresence, m } from "framer-motion"
import { useEffect, useState } from "react"

type PricingContactFormData = {
    email: string;
    website: string;
};

export default function ContactModal() {
    const [isVisible, setIsVisible] = useState(false)
    const [form, setForm] = useState<PricingContactFormData>({ email: "", website: "" })
    const [formError, setFormError] = useState<string | null>(null)
    const [formSuccess, setFormSuccess] = useState<string | null>(null)
    const [submitting, setSubmitting] = useState(false)

    // Close on Escape key
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setIsVisible(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    const validateForm = (data: PricingContactFormData) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email address.";
        if (!data.website.trim()) return "Please enter your website URL.";
        return null;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);
        setFormSuccess(null);
        const err = validateForm(form);
        if (err) return setFormError(err);

        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "Pricing Page Inquiry",
                    email: form.email,
                    business: "Financial Advisor",
                    website: form.website,
                    message: "Interested in pricing plan - contacted via pricing page modal",
                    _honey: (document.getElementById("_honey") as HTMLInputElement)?.value || ""
                }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || "Failed to send");
            }
            setFormSuccess("Thanks! I'll get back to you within 1 business day to discuss your needs.");
            setForm({ email: "", website: "" });
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again, or email me directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="relative">
            {/* Trigger Button */}
            <m.button
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isVisible}
                className="inline-flex items-center justify-center rounded-md hover:cursor-pointer hover:scale-105 bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                onClick={() => setIsVisible(true)}
                whileTap={{ y: 0.9 }}
            >
                Get Started
            </m.button>

            <AnimatePresence initial={false}>
                {isVisible ? (
                    <>
                        {/* Backdrop */}
                        <m.div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[5px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsVisible(false)}
                        />

                        {/* Dialog */}
                        <m.div
                            role="dialog"
                            aria-modal="true"
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0.95, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 8 }}
                            onClick={() => setIsVisible(false)}
                        >
                            <div
                                className="w-full max-w-md rounded-lg bg-white shadow-xl ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 pb-4">
                                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {`Let's Discuss Your Needs`}
                                    </h2>
                                    <button
                                        type="button"
                                        aria-label="Close"
                                        onClick={() => setIsVisible(false)}
                                        className="rounded px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={onSubmit} className="px-6 pb-6">
                                    {/* Honeypot field */}
                                    <input
                                        type="text"
                                        id="_honey"
                                        name="_honey"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden"
                                        aria-hidden="true"
                                    />

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="website" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Website URL
                                            </label>
                                            <input
                                                id="website"
                                                name="website"
                                                type="url"
                                                required
                                                value={form.website}
                                                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                                                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-600"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Error/Success Messages */}
                                    {formError && (
                                        <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                                            {formError}
                                        </p>
                                    )}
                                    {formSuccess && (
                                        <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400" role="status">
                                            {formSuccess}
                                        </p>
                                    )}

                                    {/* Submit Button */}
                                    <div className="mt-6 flex gap-3">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="flex-1 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                        >
                                            {submitting ? "Sending..." : "Send Inquiry"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsVisible(false)}
                                            className="px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </m.div>
                    </>
                ) : null}
            </AnimatePresence>
        </div>
    )
}
