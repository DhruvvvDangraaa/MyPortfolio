import { motion } from 'framer-motion';
import { Section } from './Section';

export function About() {
  const cards = [
    ['Professional Summary', 'Java full stack developer focused on clean backend architecture, responsive frontend systems, and AI-assisted product experiences.'],
    ['Education', 'Strong foundation in computer science fundamentals, Java programming, database systems, web engineering, and machine learning concepts.'],
    ['Career Goals', 'Grow into a product-minded engineer building reliable platforms where enterprise Java, modern UI, and applied AI work together.'],
  ];

  return (
    <Section id="about" eyebrow="About Me" title="A developer profile shaped for serious product work.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative min-h-[440px] overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/10"
        >
          <img
            src="/profile/dhruv-outdoor.jpg"
            alt="Dhruv Dangra outdoors"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/20 to-transparent" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="font-display text-2xl font-black">Curious builder. Calm executor.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
              I like bringing a grounded product mindset to technical problems, especially where backend reliability,
              clean interfaces, and AI ideas meet.
            </p>
          </figcaption>
        </motion.figure>
        <div className="grid gap-5">
          {cards.map(([title, body], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="premium-card"
            >
              <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-5 rounded-3xl border border-slate-200 bg-white/55 p-6 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 md:grid-cols-4">
        {[
          ['15+', 'Core skills'],
          ['5', 'Featured projects'],
          ['3', 'AI concepts explored'],
          ['100%', 'Product mindset'],
        ].map(([value, label]) => (
          <div key={label} className="text-center">
            <p className="font-display text-3xl font-black text-slate-950 dark:text-white">{value}</p>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
