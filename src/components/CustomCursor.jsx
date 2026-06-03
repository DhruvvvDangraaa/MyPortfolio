import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const update = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-10 w-10 rounded-full border border-cyan-300/60 bg-cyan-300/10 mix-blend-difference backdrop-blur-sm lg:block"
      animate={{ x: position.x - 20, y: position.y - 20 }}
      transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.5 }}
    />
  );
}
