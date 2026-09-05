import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { reviews } from '../data/content';

export function Reviews() {
  const { lang, t } = useLanguage();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const review = reviews[index];

  return (
    <section id="avis" className="py-24 md:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <Reveal>
            <p className="eyebrow mb-5">{t.reviews.eyebrow}</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight max-w-md">
              {t.reviews.title}
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display font-semibold text-5xl">5.0</span>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-strong)" stroke="none" />
                  ))}
                </div>
                <p className="text-sm mt-1" style={{ color: 'var(--fg-muted)' }}>
                  {t.reviews.basedOn}
                </p>
              </div>
            </div>
            <a href="#contact" className="btn-ghost mt-8 inline-flex">
              {t.reviews.cta}
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative card-surface rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden">
              <Quote
                size={80}
                className="absolute -top-3 -right-3 opacity-[0.06]"
                style={{ color: 'var(--fg)' }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--accent-strong)" stroke="none" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed font-display">{review.text[lang]}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>{review.project[lang]}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={prev}
                  className="h-10 w-10 flex items-center justify-center rounded-full border transition-colors hover:border-[var(--accent-strong)]"
                  style={{ borderColor: 'var(--line)' }}
                  aria-label="Avis précédent"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 flex items-center justify-center rounded-full border transition-colors hover:border-[var(--accent-strong)]"
                  style={{ borderColor: 'var(--line)' }}
                  aria-label="Avis suivant"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="flex gap-1.5 ml-2">
                  {reviews.map((r, i) => (
                    <button
                      key={r.id}
                      onClick={() => setIndex(i)}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: i === index ? '20px' : '6px',
                        background: i === index ? 'var(--accent-strong)' : 'var(--line)',
                      }}
                      aria-label={`Avis ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
