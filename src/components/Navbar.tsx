import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const sections = [
  { key: 'home', hash: '#accueil' },
  { key: 'about', hash: '#apropos' },
  { key: 'projects', hash: '#realisations' },
  { key: 'contact', hash: '#contact' },
] as const;

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const goToSection = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Accueil">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ background: 'var(--brand)' }}
          >
            <Zap size={18} color="var(--color-current)" strokeWidth={2.4} />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            Wizzo
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.key}
              onClick={() => goToSection(s.hash)}
              className="nav-link text-[0.95rem]"
            >
              {t.nav[s.key]}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center rounded-full border overflow-hidden text-xs font-mono" style={{ borderColor: 'var(--line)' }}>
            <button
              onClick={() => setLang('fr')}
              className="px-2.5 py-1.5 transition-colors"
              style={{ background: lang === 'fr' ? 'var(--brand)' : 'transparent', color: lang === 'fr' ? 'white' : 'var(--fg-muted)' }}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className="px-2.5 py-1.5 transition-colors"
              style={{ background: lang === 'en' ? 'var(--brand)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--fg-muted)' }}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-full border transition-colors"
            style={{ borderColor: 'var(--line)' }}
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button onClick={() => goToSection('#contact')} className="btn-primary text-sm !py-2.5 !px-5">
            {t.nav.contact}
          </button>
        </div>

        <button
          className="lg:hidden h-10 w-10 flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t"
            style={{ borderColor: 'var(--line)' }}
          >
            <div className="container-x py-5 flex flex-col gap-4">
              {sections.map((s) => (
                <button
                  key={s.key}
                  onClick={() => goToSection(s.hash)}
                  className="text-left text-lg font-display"
                >
                  {t.nav[s.key]}
                </button>
              ))}

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--line)' }}>
                <div className="flex items-center rounded-full border overflow-hidden text-xs font-mono" style={{ borderColor: 'var(--line)' }}>
                  <button
                    onClick={() => setLang('fr')}
                    className="px-3 py-1.5"
                    style={{ background: lang === 'fr' ? 'var(--brand)' : 'transparent', color: lang === 'fr' ? 'white' : 'var(--fg-muted)' }}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className="px-3 py-1.5"
                    style={{ background: lang === 'en' ? 'var(--brand)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--fg-muted)' }}
                  >
                    EN
                  </button>
                </div>
                <button
                  onClick={toggleTheme}
                  className="h-9 w-9 flex items-center justify-center rounded-full border"
                  style={{ borderColor: 'var(--line)' }}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>

              <button onClick={() => goToSection('#contact')} className="btn-primary justify-center mt-2">
                {t.nav.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
