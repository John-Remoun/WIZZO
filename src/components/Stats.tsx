import { useLanguage } from '../context/LanguageContext';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';
import { stats } from '../data/content';

export function Stats() {
  const { t } = useLanguage();

  const items = [
    { end: stats.years, suffix: '+', label: t.stats.years },
    { end: stats.projectsCount, suffix: '+', label: t.stats.projects },
    { end: stats.satisfaction, suffix: '%', label: t.stats.satisfaction },
  ];

  return (
    <section className="relative py-16 border-y" style={{ borderColor: 'var(--line)' }}>
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <div>
              <p className="font-display font-semibold text-4xl md:text-5xl">
                <CountUp end={item.end} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium" style={{ color: 'var(--fg-muted)' }}>
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.24}>
          <div className="flex items-center h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs" style={{ background: 'var(--bg-alt)', color: 'var(--accent-strong)' }}>
              <span className="node-dot" />
              {t.stats.quote}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
