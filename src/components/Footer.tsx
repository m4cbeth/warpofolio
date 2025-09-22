import { FaBluesky, FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

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
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Calgary, AB</li>
              <li>info@jarenwhitehouse.com</li>
              <li>+1 (403) 510-2768</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jaren-whitehouse"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://bsky.app/profile/jarenwhitehouse.bsky.social"
                target="_blank"
                rel="noreferrer"
                aria-label="BlueSky"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <FaBluesky />
              </a>
              <a
                href="https://github.com/m4cbeth"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                <FaGithubAlt />
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
