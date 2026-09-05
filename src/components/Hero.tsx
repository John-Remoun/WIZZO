import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Banknote, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CircuitField } from './CircuitField';
import { ContactIcons } from './ContactIcons';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 0%, color-mix(in srgb, var(--brand) 14%, transparent), transparent)',
        }}
      />
      <CircuitField
        variant="hero"
        className="absolute -top-10 -right-40 w-[720px] h-[720px] opacity-70 pointer-events-none"
        style={{ color: 'var(--accent-strong)' }}
      />

      <div className="container-x grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            {t.hero.label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-[2.5rem] leading-[1.08] sm:text-[3.2rem] md:text-[3.8rem] tracking-tight max-w-2xl"
          >
            <span className="text-gradient">{t.hero.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg max-w-xl"
            style={{ color: 'var(--fg-muted)' }}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a href="#realisations" className="btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-6"
          >
            <ContactIcons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              { icon: ShieldCheck, label: t.hero.trust1 },
              { icon: Banknote, label: t.hero.trust2 },
              { icon: MapPin, label: t.hero.trust3 },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--fg-muted)' }}>
                <Icon size={16} style={{ color: 'var(--accent-strong)' }} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] card-surface"
            style={{ boxShadow: 'var(--glow)' }}
          >
            <img
              src="/data/about/about2.jfif"
              alt="Tableau électrique moderne et sécurisé"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full blur-3xl -z-10"
            style={{ background: 'var(--color-current)', opacity: 0.15 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
