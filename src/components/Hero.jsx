import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { useTypingText } from '../hooks/useTypingText';

export function Hero() {
  const typed = useTypingText(['Spring Boot systems', 'React experiences', 'AI-powered products']);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-cyan-100">
            Java Full Stack Developer | AI Enthusiast
          </p>
          <h1 className="font-display text-5xl font-black leading-[1.02] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Dhruv Dangra builds premium{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
              digital systems
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I design and develop scalable Java backends, polished React interfaces, and practical AI workflows that turn
            ambitious ideas into reliable products.
          </p>
          <div className="mt-5 min-h-8 text-base font-semibold text-slate-800 dark:text-cyan-100">
            Currently exploring: <span className="text-aqua dark:text-cyan-300">{typed}</span>
            <span className="ml-1 animate-pulse">|</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              View Projects <FiArrowRight />
            </a>
            <a className="btn-secondary" href="/Dhruv-Dangra-Resume.pdf" download>
              Download Resume <FiDownload />
            </a>
            <a className="btn-secondary" href="#contact">
              Contact Me <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/35 via-indigo-500/25 to-orange-400/35 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/65 p-5 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/10">
            <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
              <img
                src="/profile/dhruv-headshot.png"
                alt="Professional portrait of Dhruv Dangra"
                className="h-[430px] w-full object-cover object-[center_18%] sm:h-[500px]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/12 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/12 p-4 text-white shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-semibold text-cyan-100">Available for Java Full Stack roles</p>
                <p className="mt-1 font-display text-2xl font-black">Dhruv Dangra</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-slate-100 shadow-2xl">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="overflow-hidden text-xs leading-6 text-cyan-100 sm:text-sm">
                <code>{`class Developer {
  name = "Dhruv Dangra";
  stack = ["Java", "Spring Boot", "React"];
  focus = "AI-enabled product engineering";

  build() {
    return scalableApis + premiumInterfaces;
  }
}`}</code>
              </pre>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {['REST APIs', 'Spring AI', 'React UI'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/70 p-4 text-center text-sm font-bold text-slate-800 dark:bg-white/10 dark:text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
