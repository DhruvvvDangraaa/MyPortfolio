import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { Section } from './Section';

export function Contact() {
  const contacts = [
    { label: 'Email', value: 'dhruvdangra@example.com', href: 'mailto:dhruvdangra@example.com', icon: FiMail },
    { label: 'LinkedIn', value: 'linkedin.com/in/dhruvdangra', href: 'https://linkedin.com/', icon: FiLinkedin },
    { label: 'GitHub', value: 'github.com/dhruvdangra', href: 'https://github.com/', icon: FiGithub },
    { label: 'Location', value: 'India', href: '#contact', icon: FiMapPin },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something thoughtful and technically strong.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-200 dark:bg-white/10">
                  <Icon size={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="block font-bold text-slate-950 dark:text-white">{item.value}</span>
                </span>
              </motion.a>
            );
          })}
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/10"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input className="field-input" type="text" placeholder="Your name" aria-label="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" placeholder="you@example.com" aria-label="Your email" />
            </label>
          </div>
          <label className="field-label mt-4">
            Subject
            <input className="field-input" type="text" placeholder="Project, role, or collaboration" aria-label="Subject" />
          </label>
          <label className="field-label mt-4">
            Message
            <textarea className="field-input min-h-36 resize-y" placeholder="Tell me about the opportunity..." aria-label="Message" />
          </label>
          <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
