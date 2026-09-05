import { motion } from 'framer-motion';
import {
  Zap, Hammer, ShieldCheck, LayoutGrid, Lightbulb, Cpu, BatteryCharging, Building2, Wrench, ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

const icons = [Zap, Hammer, ShieldCheck, LayoutGrid, Lightbulb, Cpu, BatteryCharging, Building2, Wrench];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.services.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-4" style={{ color: 'var(--fg-muted)' }}>
            {t.services.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group card-surface rounded-xl p-7 h-full relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 0 1px var(--accent-strong)' }}
                  />
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--accent-strong)' }} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {item.desc}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: 'var(--accent-strong)' }}
                  >
                    {t.projects.viewProject}
                    <ArrowUpRight size={15} />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a href="#realisations" className="btn-ghost">
            {t.services.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
