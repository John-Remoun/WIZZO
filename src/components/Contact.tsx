import { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';
import { companyInfo } from '../data/content';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';

export function Contact() {
  const { lang, t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({ name: '', email: '', phone: '', type: '', message: '' });

  const handleChange = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.type ? `[Project Type: ${values.type}]\n\n${values.message}` : values.message,
        }),
      });

      const text = await response.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          response.status === 404 || text.includes('<!DOCTYPE') || text.includes('<!doctype')
            ? (lang === 'fr'
                ? 'L’API /api/contact n’est pas disponible en serveur local standard. Testez sur Vercel.'
                : 'The /api/contact endpoint is only active on Vercel or Vercel Dev.')
            : `Server error (${response.status})`
        );
      }

      if (response.ok && data.success) {
        setStatus('sent');
        setValues({ name: '', email: '', phone: '', type: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || (lang === 'fr' ? 'Une erreur est survenue lors de l’envoi.' : 'Failed to send message. Please try again.'));
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || (lang === 'fr' ? 'Erreur de connexion réseau.' : 'Network error. Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      key: 'call',
      href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
      label: t.contact.call,
      value: companyInfo.phone,
      icon: <Phone size={20} color="white" />,
    },
    {
      key: 'whatsapp',
      href: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`,
      label: 'WhatsApp',
      value: companyInfo.whatsapp,
      icon: <WhatsAppIcon size={20} color="white" />,
      external: true,
    },
    {
      key: 'instagram',
      href: companyInfo.instagram,
      label: 'Instagram',
      value: '@wizzo_75',
      icon: <InstagramIcon size={20} color="white" />,
      external: true,
    },
    {
      key: 'email',
      href: `mailto:${companyInfo.email}`,
      label: t.contact.email,
      value: companyInfo.email,
      icon: <Mail size={20} color="white" />,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{t.contact.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            {t.contact.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.key}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noreferrer' : undefined}
                className="card-surface rounded-xl p-6 flex items-center gap-4 group transition-transform hover:-translate-y-0.5"
              >
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 text-white"
                  style={{ background: 'var(--brand)' }}
                >
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase" style={{ color: 'var(--fg-muted)' }}>{method.label}</p>
                  <p className="font-display font-semibold text-lg break-all">{method.value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card-surface rounded-2xl p-7 md:p-9">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-strong)' }} />
                  <p className="font-display font-semibold text-xl mt-4">
                    {lang === 'fr' ? 'Merci, votre demande a été envoyée.' : 'Thank you, your request has been sent.'}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm underline opacity-80 hover:opacity-100"
                  >
                    {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label={t.contact.form.name}
                    id="name"
                    required
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                  <Field
                    label={t.contact.form.email}
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange('email')}
                  />
                  <Field
                    label={t.contact.form.phone}
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange('phone')}
                  />
                  <div>
                    <label htmlFor="type" className="text-sm font-medium block mb-2">
                      {t.contact.form.type}
                    </label>
                    <select
                      id="type"
                      value={values.type}
                      onChange={handleChange('type')}
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      style={{ background: 'var(--bg-alt)', border: '1px solid var(--card-border)' }}
                    >
                      <option value="">{t.contact.form.typePlaceholder}</option>
                      {t.services.items.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium block mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={values.message}
                      onChange={handleChange('message')}
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                      style={{ background: 'var(--bg-alt)', border: '1px solid var(--card-border)' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="sm:col-span-2 flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm"
                      style={{ background: 'color-mix(in srgb, #ff4d4d 12%, transparent)', color: '#ff4d4d' }}
                    >
                      <AlertCircle size={16} />
                      {errorMessage || (lang === 'fr'
                        ? "Une erreur est survenue. Merci de réessayer ou de nous contacter directement."
                        : 'Something went wrong. Please try again or contact us directly.')}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary sm:col-span-2 justify-center disabled:opacity-60"
                  >
                    {loading
                      ? (lang === 'fr' ? 'Envoi en cours…' : 'Sending…')
                      : t.contact.form.submit}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium block mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
        style={{ background: 'var(--bg-alt)', border: '1px solid var(--card-border)' }}
      />
    </div>
  );
}
