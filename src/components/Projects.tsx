import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';
import { projects, type Project } from '../data/content';

const categoryOrder: Array<keyof typeof categoryKeyMap> = [
  'all', 'kitchen', 'rooms', 'bathrooms', 'construction', 'panel',
];

const categoryKeyMap = {
  all: 'all',
  kitchen: 'kitchen',
  rooms: 'rooms',
  bathrooms: 'bathrooms',
  construction: 'construction',
  panel: 'panel',
} as const;

export function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [active, setActive] = useState<Project | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const openProject = (project: Project) => {
    setActive(project);
    setModalImgIndex(0);
  };

  const closeProject = () => setActive(null);

  const nextImage = () => {
    if (!active) return;
    setModalImgIndex((i) => (i + 1) % active.images.length);
  };

  const prevImage = () => {
    if (!active) return;
    setModalImgIndex((i) => (i - 1 + active.images.length) % active.images.length);
  };

  return (
    <section id="realisations" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.projects.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.projects.title}
          </h2>
          <p className="mt-4" style={{ color: 'var(--fg-muted)' }}>
            {t.projects.sub}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2.5">
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium font-mono transition-all"
              style={{
                background: filter === cat ? 'var(--brand)' : 'var(--card)',
                color: filter === cat ? 'white' : 'var(--fg-muted)',
                border: `1px solid ${filter === cat ? 'var(--brand)' : 'var(--card-border)'}`,
              }}
            >
              {t.projects.categories[categoryKeyMap[cat]]}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onOpen={openProject} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'color-mix(in srgb, var(--ink) 75%, transparent)' }}
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="card-surface rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto"
            >
              <div className="relative">
                <div
                  className="relative overflow-hidden rounded-t-2xl flex items-center justify-center"
                  style={{ background: 'var(--bg-alt)', maxHeight: '70vh' }}
                >
                  <img
                    src={active.images[modalImgIndex]}
                    alt={active.imageAlt[lang]}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />

                  {active.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full glass"
                        aria-label="Image précédente"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full glass"
                        aria-label="Image suivante"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {active.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setModalImgIndex(i)}
                            className="h-1.5 rounded-full transition-all"
                            style={{
                              width: i === modalImgIndex ? '18px' : '6px',
                              background: i === modalImgIndex ? 'var(--color-current)' : 'rgba(255,255,255,0.5)',
                            }}
                            aria-label={`Image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full glass"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono uppercase glass">
                  {t.projects.categories[active.category]}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display font-semibold text-2xl">{active.title[lang]}</h3>
                <p className="mt-5 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  {active.description[lang]}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.services[lang].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-xs font-mono"
                      style={{ background: 'var(--bg-alt)', color: 'var(--accent-strong)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
