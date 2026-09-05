import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from '../Reveal';

export function Expertise() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.profilePage.expertise.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.profilePage.expertise.title}
          </h2>
        </Reveal>

        <div ref={ref} className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-9 max-w-4xl">
          {t.profilePage.expertise.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-medium text-sm">{item.label}</span>
                <span className="font-mono text-sm" style={{ color: 'var(--accent-strong)' }}>{item.value}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.value}%` } : { width: 0 }}
                  transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--brand), var(--accent))' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
