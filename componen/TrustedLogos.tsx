'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const logos = [
  { src: '/image/trusted-by/agency-elevation.svg', alt: 'Agency' },
  { src: '/image/trusted-by/astrato.svg', alt: 'astrato' },
  { src: '/image/trusted-by/coke.svg', alt: 'coke' },
  { src: '/image/trusted-by/coyote.svg', alt: 'coyote' },
  { src: '/image/trusted-by/datastax.svg', alt: 'datastax' },
  { src: '/image/trusted-by/duolingo.svg', alt: 'duolingo' },
  { src: '/image/trusted-by/gitlab.svg', alt: 'gitlab' },
  { src: '/image/trusted-by/gm.svg', alt: 'gm' },
  { src: '/image/trusted-by/mercado.svg', alt: 'mercado' },
  { src: '/image/trusted-by/shares.svg', alt: 'shares' },
  { src: '/image/trusted-by/shopify.svg', alt: 'shopify' },
  { src: '/image/trusted-by/stripe.svg', alt: 'stripe' }
];

type Props = {
  startFrom?: number;
  intervalMs?: number;
};

export default function TrustedLogos({ startFrom = 0, intervalMs }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    setIndex(startFrom % logos.length);
    const randomInterval = intervalMs ?? (Math.floor(Math.random() * 2000) + 2000); // antara 2000–4000ms
    const interval = setInterval(() => {
      setIndex((prev) => (prev !== null ? (prev + 1) % logos.length : 0));
    }, randomInterval);
    return () => clearInterval(interval);
  }, [startFrom, intervalMs]);

  if (index === null) return null;

  return (
    <div className="w-32 h-16 mx-auto relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={logos[index].src}
          src={logos[index].src}
          alt={logos[index].alt}
          className="absolute w-full h-full object-contain dark:filter dark:brightness-0 dark:invert dark:opacity-60 opacity-75"
          initial={{ opacity: 0, y: 30, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1}}
          exit={{ opacity: 0, y: -30, scale: 0.7 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
    </div>  );
}
