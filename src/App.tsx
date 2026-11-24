import React, { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { RagPlaygroundModal } from './components/projects/RagPlaygroundModal';

export function App() {
  // Initialize theme manager hook
  useTheme();

  const [ragModalOpen, setRagModalOpen] = useState(false);
  
  const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  const handleOpenRagModal = () => setRagModalOpen(true);
  const handleCloseRagModal = () => setRagModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Content */}
      <main className="relative overflow-hidden">
        <HeroSection onOpenRagModal={handleOpenRagModal} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection onOpenRagModal={handleOpenRagModal} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive RAG AI Assistant Modal */}
      <RagPlaygroundModal
        isOpen={ragModalOpen}
        onClose={handleCloseRagModal}
      />
    </div>
  );
}

export default App;
