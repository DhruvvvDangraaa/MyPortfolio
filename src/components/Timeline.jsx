import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import { Section } from './Section';

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Timeline" title="A focused path from fundamentals to AI-enabled products.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400 via-indigo-500 to-orange-400 md:left-1/2" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              className={`relative pl-14 md:w-1/2 md:pl-0 ${index % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}
            >
              <span
                className={`absolute left-3 top-7 h-4 w-4 rounded-full border-4 border-white bg-aqua shadow-glow dark:border-ink md:left-auto ${
                  index % 2 ? 'md:left-[-8px]' : 'md:right-[-8px]'
                }`}
              />
              <div className="premium-card">
                <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-aqua">{item.year}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
