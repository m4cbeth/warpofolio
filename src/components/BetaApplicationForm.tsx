"use client";

import { useState } from "react";

type BetaFormData = {
    name: string;
    email: string;
    firmName: string;
    contentChallenge: string;
    idealPosts: string;
};

export function BetaApplicationForm() {
    const [form, setForm] = useState<BetaFormData>({
        name: "",
        email: "",
        firmName: "",
        contentChallenge: "",
        idealPosts: "",
    });
    const [formError, setFormError] = useState<string | null>(null);
    const [formSuccess, setFormSuccess] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const validateForm = (data: BetaFormData) => {
        if (!data.name.trim()) return "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please enter a valid email.";
        if (!data.firmName.trim()) return "Please enter your firm name.";
        if (!data.contentChallenge.trim()) return "Please describe your current content challenge.";
        if (!data.idealPosts.trim()) return "Please tell us your ideal number of posts per month.";
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
                    ...form,
                    message: `Beta Application:\n\nContent Challenge: ${form.contentChallenge}\nIdeal Posts/Month: ${form.idealPosts}`,
                    _honey: (document.getElementById("_honey") as HTMLInputElement)?.value || "",
                }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || "Failed to send");
            }
            setFormSuccess("Thanks! I'll personally contact you within 24 hours to see if you're a good fit for our beta program.");
            setForm({
                name: "",
                email: "",
                firmName: "",
                contentChallenge: "",
                idealPosts: "",
            });
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mx-auto max-w-2xl">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-900">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold mb-4">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        LIMITED TO 3 CALGARY ADVISORS
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                        Beta Application Form
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Fill out the form below and I'll personally contact you within 24 hours
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
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

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Name *
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Email *
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="you@firm.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="firmName" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Firm Name *
                        </label>
                        <input
                            id="firmName"
                            name="firmName"
                            type="text"
                            required
                            value={form.firmName}
                            onChange={(e) => setForm((f) => ({ ...f, firmName: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Your financial advisory firm"
                        />
                    </div>

                    <div>
                        <label htmlFor="contentChallenge" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Current biggest content challenge? *
                        </label>
                        <textarea
                            id="contentChallenge"
                            name="contentChallenge"
                            required
                            rows={4}
                            value={form.contentChallenge}
                            onChange={(e) => setForm((f) => ({ ...f, contentChallenge: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="e.g., Finding time to post consistently, worrying about compliance, coming up with fresh ideas..."
                        />
                    </div>

                    <div>
                        <label htmlFor="idealPosts" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Ideal number of posts per month? *
                        </label>
                        <select
                            id="idealPosts"
                            name="idealPosts"
                            required
                            value={form.idealPosts}
                            onChange={(e) => setForm((f) => ({ ...f, idealPosts: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                            <option value="">Select your ideal posting frequency</option>
                            <option value="4-6 posts">4-6 posts per month</option>
                            <option value="8-10 posts">8-10 posts per month</option>
                            <option value="12-15 posts">12-15 posts per month</option>
                            <option value="16+ posts">16+ posts per month</option>
                        </select>
                    </div>

                    {formError && (
                        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                            <p className="text-sm text-red-600 dark:text-red-400" role="alert">{formError}</p>
                        </div>
                    )}

                    {formSuccess && (
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                            <p className="text-sm text-green-600 dark:text-green-400" role="status">{formSuccess}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {submitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "Apply for Beta Access"
                        )}
                    </button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        * Required fields. Your information is secure and will only be used for beta program communication.
                    </p>
                </form>
            </div>
        </div>
    );
}
