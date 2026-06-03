import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { navItems } from '../data/portfolio';

export function Navbar({ theme, toggleTheme }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-white/75 px-5 py-3 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70 sm:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Dhruv Dangra home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 font-display text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink">
            DD
          </span>
          <span className="hidden font-display text-sm font-bold text-slate-950 dark:text-white sm:block">
            Dhruv Dangra
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/60 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-ink"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card dark:border-white/10 dark:bg-white/10 dark:text-white"
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </nav>
    </motion.header>
  );
}
