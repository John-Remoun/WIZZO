import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCanHover } from '../lib/useCanHover';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

const MOBILE_INTERVAL_MS = 3000;

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const canHover = useCanHover();
  const [imgIndex, setImgIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const hasMultiple = project.images.length > 1;

  // Single source of truth for image cycling:
  // - Desktop (hover-capable): cycle only while the pointer is hovering.
  // - Mobile/touch (not hover-capable): cycle continuously on a timer,
  //   independent of any hover/touch event — this must never depend on
  //   :hover or onMouseEnter, since mobile browsers don't fire those.
  useEffect(() => {
    if (!hasMultiple) return;

    const shouldRunDesktopCycle = canHover && hovering;
    const shouldRunMobileCycle = !canHover;

    if (!shouldRunDesktopCycle && !shouldRunMobileCycle) {
      setImgIndex(0);
      return;
    }

    const intervalMs = shouldRunMobileCycle ? MOBILE_INTERVAL_MS : 900;
    const id = setInterval(() => {
      setImgIndex((i) => (i + 1) % project.images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [canHover, hovering, hasMultiple, project.images.length]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative block w-full rounded-xl overflow-hidden text-left break-inside-avoid card-surface"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.images[imgIndex]}
          alt={project.imageAlt[lang]}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--ink) 85%, transparent), transparent 60%)' }}
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[0.68rem] font-mono uppercase tracking-wide glass">
          {t.projects.categories[project.category]}
        </span>

        {hasMultiple && (
          <div className="absolute top-3 right-3 flex gap-1">
            {project.images.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === imgIndex ? '14px' : '5px',
                  background: i === imgIndex ? 'var(--color-current)' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white font-display font-semibold">{project.title[lang]}</p>
        </div>
      </div>
    </motion.button>
  );
}
