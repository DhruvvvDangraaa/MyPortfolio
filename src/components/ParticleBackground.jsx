import { useMemo } from 'react';
import { motion } from 'framer-motion';

export function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 3 + Math.random() * 7,
        duration: 7 + Math.random() * 10,
        delay: Math.random() * 4,
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35 dark:opacity-20" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-slate-900/25 shadow-[0_0_20px_rgba(6,182,212,0.55)] dark:bg-white/50"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-12, 18, -12], opacity: [0.18, 0.55, 0.18], scale: [1, 1.5, 1] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
