import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from '../Reveal';
import { projects } from '../../data/content';

export function ProjectShowcase() {
  const { lang, t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 md:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-x flex items-end justify-between flex-wrap gap-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-5">{t.profilePage.showcase.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.profilePage.showcase.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="h-11 w-11 flex items-center justify-center rounded-full border transition-colors hover:border-[var(--accent-strong)]"
            style={{ borderColor: 'var(--line)' }}
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="h-11 w-11 flex items-center justify-center rounded-full border transition-colors hover:border-[var(--accent-strong)]"
            style={{ borderColor: 'var(--line)' }}
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex gap-6 overflow-x-auto pb-4 px-6 md:px-10 snap-x snap-mandatory scroll-px-6"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="snap-start shrink-0 w-[320px] card-surface rounded-xl overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img
                src={project.images[0]}
                alt={project.imageAlt[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[0.68rem] font-mono uppercase glass">
                {t.projects.categories[project.category]}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display font-semibold">{project.title[lang]}</h3>
              <p className="flex items-center gap-1.5 text-xs mt-1.5" style={{ color: 'var(--fg-muted)' }}>
                <MapPin size={12} /> {project.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {project.description[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
