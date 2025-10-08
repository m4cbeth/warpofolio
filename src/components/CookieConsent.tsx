"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // localStorage.setItem("cookie-consent", "dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Cookie Notice
              </h3>
              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="Close cookie notice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              We use cookies for analytics and site functionality to improve your experience.
            </p>
            
             <div className="flex gap-2">
               <button
                 onClick={handleAccept}
                 className="flex-1 bg-slate-900 text-white text-sm font-medium py-2 px-3 rounded-md hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
               >
                 OK
               </button>
               <Link
                 href="/privacy"
                 className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium py-2 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center"
               >
                 Learn More
               </Link>
             </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
