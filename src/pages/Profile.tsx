import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProfileHero } from '../components/profile/ProfileHero';
import { StoryTimeline } from '../components/profile/StoryTimeline';
import { Certifications } from '../components/profile/Certifications';
import { Expertise } from '../components/profile/Expertise';
import { ProjectShowcase } from '../components/profile/ProjectShowcase';
import { Reviews } from '../components/Reviews';
import { Achievements } from '../components/profile/Achievements';
import { ContactMe } from '../components/profile/ContactMe';

export function Profile() {
  return (
    <>
      <Navbar />
      <main>
        <ProfileHero />
        <StoryTimeline />
        <Certifications />
        <Expertise />
        <ProjectShowcase />
        <Reviews />
        <Achievements />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
