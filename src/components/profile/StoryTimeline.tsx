import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from '../Reveal';

export function StoryTimeline() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.profilePage.story.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.profilePage.story.title}
          </h2>
        </Reveal>

        <div className="mt-16 relative max-w-3xl">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ background: 'var(--line)' }}
          />
          <div className="flex flex-col gap-12">
            {t.profilePage.story.items.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1}>
                <div className="relative pl-10">
                  <span
                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full"
                    style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent) 18%, transparent)' }}
                  />
                  <p className="font-mono text-sm mb-1" style={{ color: 'var(--accent-strong)' }}>{item.year}</p>
                  <h3 className="font-display font-semibold text-xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed max-w-xl" style={{ color: 'var(--fg-muted)' }}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
