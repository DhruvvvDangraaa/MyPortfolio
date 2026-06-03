import { navItems, socials } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/65 px-5 py-10 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-black text-slate-950 dark:text-white">Dhruv Dangra</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Java Full Stack Developer and AI Enthusiast crafting scalable systems with premium user experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition hover:-translate-y-1 dark:bg-white dark:text-ink">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-500 dark:text-slate-400">
        Copyright © {new Date().getFullYear()} Dhruv Dangra. All rights reserved.
      </p>
    </footer>
  );
}
