import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type TranslationShape } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'en' || stored === 'fr' ? stored : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
