import { useLanguage } from '../../context/LanguageContext';
import { CountUp } from '../CountUp';
import { Reveal } from '../Reveal';
import { stats } from '../../data/content';

export function Achievements() {
  const { t } = useLanguage();

  const items = [
    { end: stats.projectsCount, suffix: '+', label: t.stats.projects },
    { end: stats.years, suffix: '+', label: t.stats.years },
    { end: stats.satisfaction, suffix: '%', label: t.stats.satisfaction },
    { end: 12, suffix: '', label: t.contact.area },
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">{t.profilePage.achievements.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.profilePage.achievements.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <p className="font-display font-semibold text-4xl md:text-5xl">
                  <CountUp end={item.end} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--fg-muted)' }}>
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
