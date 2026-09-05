import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { CircuitField } from './CircuitField';

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--brand), var(--color-deep-2))' }}
        >
          <CircuitField
            variant="hero"
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
            style={{ color: '#ffffff' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,212,255,0.25), transparent)' }}
          />
          <Reveal className="relative">
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white leading-tight max-w-2xl mx-auto">
              {t.ctaBanner.title}
            </h2>
            <p className="mt-5 text-white/75 max-w-lg mx-auto">
              {t.ctaBanner.sub}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white font-semibold px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5"
                style={{ color: 'var(--color-deep)' }}
              >
                {t.ctaBanner.ctaSecondary}
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
