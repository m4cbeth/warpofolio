export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 font-semibold text-white dark:bg-white dark:text-slate-900">
                JW
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">JW Web & SEO</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Calgary-based web development, SEO, and conversion copywriting for financial advisors.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#home" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Calgary, AB</li>
              <li>hello@example.com</li>
              <li>+1 (403) 000-0000</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/example"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.61 4.09 5.5 2.98 5.5 1.87 5.5.98 4.61.98 3.5.98 2.39 1.87 1.5 2.98 1.5c1.11 0 2 .89 2 2zM.98 8.5h4v14h-4v-14zm7 0h3.83v1.91h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05v8.1h-4v-7.2c0-1.72-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.83v7.32h-4v-14z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@example"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 00.5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 002.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 002.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7L16 12l-6.5 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-4 md:px-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} JW Web & SEO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
