import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <ParticleBackground />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
