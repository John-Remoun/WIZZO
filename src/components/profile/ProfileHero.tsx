import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { companyInfo, stats } from '../../data/content';
import { CircuitField } from '../CircuitField';

export function ProfileHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 20% 10%, color-mix(in srgb, var(--brand) 14%, transparent), transparent)',
        }}
      />
      <CircuitField
        className="absolute -bottom-20 -left-40 w-[600px] h-[600px] opacity-50 pointer-events-none"
        style={{ color: 'var(--accent-strong)' }}
      />

      <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto lg:mx-0 max-w-sm w-full"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] card-surface"
            style={{ boxShadow: 'var(--glow)' }}
          >
            <img
              src="/data/about/about2.jfif"
              alt={companyInfo.ownerName}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute -top-5 -right-5 glass rounded-xl px-4 py-3 flex items-center gap-2"
          >
            <Award size={18} style={{ color: 'var(--accent-strong)' }} />
            <span className="font-mono text-xs">{stats.years}+ {t.stats.years}</span>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow mb-5">{t.profilePage.badge}</p>
          <h1 className="font-display font-semibold text-[2.2rem] sm:text-5xl leading-[1.1] tracking-tight">
            {companyInfo.ownerName}
          </h1>
          <p className="mt-3 text-lg font-medium" style={{ color: 'var(--accent-strong)' }}>
            {t.profilePage.hero.role}
          </p>
          <p className="mt-6 text-lg max-w-xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            {t.profilePage.hero.intro}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
            <MapPin size={16} style={{ color: 'var(--accent-strong)' }} />
            {t.profilePage.hero.location}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact-profil" className="btn-primary">
              {t.profilePage.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              {t.profilePage.hero.ctaSecondary}
            </a>
          </div>

          <Link to="/" className="inline-block mt-8 text-sm font-medium nav-link">
            ← {t.common.backHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
