import { Zap, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const contactLinks = [
    { key: 'phone', href: `tel:${companyInfo.phone.replace(/\s/g, '')}`, label: 'Téléphone', icon: <Phone size={14} /> },
    {
      key: 'whatsapp',
      href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`,
      label: 'WhatsApp',
      icon: <WhatsAppIcon size={14} />,
      external: true,
    },
    {
      key: 'instagram',
      href: companyInfo.instagram,
      label: 'Instagram',
      icon: <InstagramIcon size={14} />,
      external: true,
    },
    { key: 'email', href: `mailto:${companyInfo.email}`, label: 'Email', icon: <Mail size={14} /> },
  ];

  return (
    <footer className="pt-10 pb-6 border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="container-x grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: 'var(--brand)' }}
            >
              <Zap size={16} color="var(--color-current)" strokeWidth={2.4} />
            </span>
            <span className="font-display font-semibold">
              Wizzo
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: 'var(--fg-muted)' }}>
            {t.footer.desc}
          </p>
          <div className="flex gap-3 mt-4">
            {contactLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="h-8 w-8 flex items-center justify-center rounded-full border transition-colors hover:border-[var(--accent-strong)]"
                style={{ borderColor: 'var(--line)' }}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide mb-3" style={{ color: 'var(--fg-muted)' }}>
            {t.footer.nav}
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#accueil" className="hover:opacity-70 transition-opacity">{t.nav.home}</a></li>
            <li><a href="#apropos" className="hover:opacity-70 transition-opacity">{t.nav.about}</a></li>
            <li><a href="#realisations" className="hover:opacity-70 transition-opacity">{t.nav.projects}</a></li>
            <li><a href="#contact" className="hover:opacity-70 transition-opacity">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide mb-3" style={{ color: 'var(--fg-muted)' }}>
            {t.footer.contact}
          </p>
          <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
            <li>{companyInfo.phone}</li>
            <li className="break-all">{companyInfo.email}</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-8 pt-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderColor: 'var(--line)' }}>
        <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
          © {year} Wizzo. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
