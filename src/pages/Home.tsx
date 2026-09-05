import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
// Reviews section is temporarily disabled site-wide per client request.
// The component and its data are preserved — re-enable by uncommenting
// the import and the <Reviews /> render below.
// import { Reviews } from '../components/Reviews';
import { CtaBanner } from '../components/CtaBanner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

// Statistics section ("10+ Years", "120+ Projects", etc.) removed per client
// request. Component still exists at src/components/Stats.tsx if needed later.
// import { Stats } from '../components/Stats';

// Services section removed from the page per client request. Component still
// exists at src/components/Services.tsx if needed later.
// import { Services } from '../components/Services';

// "Why Us" section removed per client request. Component still exists at
// src/components/WhyUs.tsx if needed later.
// import { WhyUs } from '../components/WhyUs';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Reviews /> */}
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
