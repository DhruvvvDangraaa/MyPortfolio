import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { useTheme } from './hooks/useTheme';

const Projects = lazy(() => import('./components/Projects').then((module) => ({ default: module.Projects })));

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-ink text-white"
      role="status"
      aria-live="polite"
    >
      <div className="relative grid h-28 w-28 place-items-center">
        <span className="absolute inset-0 rounded-full border border-cyan-300/30" />
        <motion.span
          className="absolute inset-3 rounded-full border-2 border-transparent border-t-cyan-300 border-r-orange-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <span className="font-display text-xl font-black">DD</span>
      </div>
    </motion.div>
  );
}

function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<div className="px-5 py-20 text-center font-bold text-slate-600 dark:text-slate-300">Loading projects...</div>}>
        <Projects />
      </Suspense>
      <Achievements />
      <Timeline />
      <Contact />
    </motion.main>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ParticleBackground />
      <CustomCursor />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
}
