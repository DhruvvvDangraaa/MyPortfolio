import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { achievements } from '../data/portfolio';
import { Section } from './Section';

export function Achievements() {
  return (
    <Section id="experience" eyebrow="Experience & Achievements" title="Signals of practical engineering growth.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((group, index) => (
          <motion.article
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="premium-card"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-white">
              <FiAward size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{group.label}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
