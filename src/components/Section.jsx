import { motion } from 'framer-motion';

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-aqua dark:text-cyan-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
