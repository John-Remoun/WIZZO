import { Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

interface ContactIconsProps {
  className?: string;
  size?: 'md' | 'lg';
}

export function ContactIcons({ className = '', size = 'md' }: ContactIconsProps) {
  const box = size === 'lg' ? 'h-[52px] w-[52px]' : 'h-11 w-11';
  const iconSize = size === 'lg' ? 22 : 19;

  const items = [
    {
      key: 'phone',
      href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
      label: 'Téléphone',
      icon: <Phone size={iconSize} />,
    },
    {
      key: 'whatsapp',
      href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`,
      label: 'WhatsApp',
      icon: <WhatsAppIcon size={iconSize} />,
      external: true,
    },
    {
      key: 'instagram',
      href: companyInfo.instagram,
      label: 'Instagram',
      icon: <InstagramIcon size={iconSize} />,
      external: true,
    },
    {
      key: 'email',
      href: `mailto:${companyInfo.email}`,
      label: 'Email',
      icon: <Mail size={iconSize} />,
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.label}
          className={`${box} rounded-full flex items-center justify-center border transition-all hover:-translate-y-0.5`}
          style={{
            borderColor: 'var(--line)',
            background: 'var(--card)',
            color: 'var(--accent-strong)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-strong)';
            e.currentTarget.style.boxShadow = '0 6px 20px -6px color-mix(in srgb, var(--accent) 40%, transparent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--line)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
