import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, FileBadge, ZoomIn } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from '../Reveal';
import { certifications, type Certification } from '../../data/content';

export function Certifications() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.profilePage.certifications.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.profilePage.certifications.title}
          </h2>
          <p className="mt-4" style={{ color: 'var(--fg-muted)' }}>
            {t.profilePage.certifications.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <motion.button
                whileHover={{ y: -6 }}
                onClick={() => setActive(cert)}
                className="group card-surface rounded-xl overflow-hidden text-left w-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}
                  >
                    <ZoomIn size={28} color="white" />
                  </div>
                </div>
                <div className="p-5 flex items-start gap-3">
                  <FileBadge size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-strong)' }} />
                  <div>
                    <p className="font-display font-semibold text-sm leading-snug">{cert.title[lang]}</p>
                    <p className="text-xs mt-1 font-mono" style={{ color: 'var(--fg-muted)' }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: 'color-mix(in srgb, var(--ink) 88%, transparent)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              <img src={active.image} alt={active.title[lang]} className="w-full rounded-2xl" />
              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 h-10 w-10 flex items-center justify-center rounded-full glass"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
              <div className="glass rounded-xl p-4 mt-4">
                <p className="font-display font-semibold">{active.title[lang]}</p>
                <p className="text-xs font-mono mt-1" style={{ color: 'var(--fg-muted)' }}>
                  {active.issuer} · {active.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
