import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Reveal } from '../Reveal';
import { companyInfo } from '../../data/content';
import { WhatsAppIcon, InstagramIcon } from '../BrandIcons';

export function ContactMe() {
  const { t } = useLanguage();

  const links = [
    { icon: Phone, label: companyInfo.phone, href: `tel:${companyInfo.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}` },
    { icon: InstagramIcon, label: 'Instagram', href: companyInfo.instagram },
  ];

  return (
    <section id="contact-profil" className="py-24 md:py-32" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">{t.profilePage.contactMe.eyebrow}</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
              {t.profilePage.contactMe.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card-surface rounded-xl p-6 flex flex-col items-start gap-4 h-full transition-transform hover:-translate-y-1"
              >
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center text-white"
                  style={{ background: 'var(--brand)' }}
                >
                  <link.icon size={20} color="white" className="text-white" />
                </div>
                <p className="font-medium text-sm break-all">{link.label}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <a href="#contact-profil" className="btn-primary mt-10">
            {t.profilePage.contactMe.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
