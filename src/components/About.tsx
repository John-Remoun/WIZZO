import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { ContactIcons } from './ContactIcons';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] card-surface">
              <img
                src="/data/about/about.jpeg"
                alt="Électricien professionnel au travail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-5">{t.about.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight max-w-lg">
            {t.about.title}
          </h2>
          <p className="mt-6 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            {t.about.p1}
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            {t.about.p2}
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            {t.about.p3}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            {t.about.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} style={{ color: 'var(--accent-strong)' }} />
                <span className="font-medium text-sm">{h}</span>
              </div>
            ))}
          </div>

          <ContactIcons className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
