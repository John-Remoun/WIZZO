import { Sparkles, ShieldCheck, MessageCircle, Cpu, Eye, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

const icons = [Sparkles, ShieldCheck, MessageCircle, Cpu, Eye, Clock];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.why.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.why.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="flex gap-4">
                  <div
                    className="h-11 w-11 shrink-0 rounded-lg flex items-center justify-center"
                    style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent-strong)' }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
