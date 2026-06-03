import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { Section } from './Section';

export function Projects() {
  const [active, setActive] = useState('All');
  const filters = ['All', ...new Set(projects.map((project) => project.category))];
  const visibleProjects = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Product-style case studies with full stack depth.">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              active === filter
                ? 'bg-slate-950 text-white shadow-glow dark:bg-white dark:text-ink'
                : 'border border-slate-200 bg-white/70 text-slate-600 hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-card backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/10"
            >
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.title} project visual`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aqua" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a className="icon-link" href={project.github} target="_blank" rel="noreferrer">
                      <FiGithub /> GitHub
                    </a>
                    <a className="icon-link" href={project.demo} target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
