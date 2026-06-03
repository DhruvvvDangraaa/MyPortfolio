import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Full stack skills with AI momentum.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
              className="premium-card group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-cyan-200 transition group-hover:-translate-y-1 dark:bg-white/10">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
                  </div>
                </div>
                <span className="font-display text-lg font-bold text-slate-900 dark:text-white">{skill.level}%</span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-orange-400"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
