import { navLinks, profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-sm font-extrabold text-white">
            {profile.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {profile.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profile.role}
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page mt-6 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row dark:border-slate-800 dark:text-slate-400">
        <p>
          © {currentYear} {profile.name}. All rights reserved.
        </p>
        <a
          href={profile.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-600 dark:hover:text-brand-400"
        >
          {profile.website}
        </a>
      </div>
    </footer>
  )
}
