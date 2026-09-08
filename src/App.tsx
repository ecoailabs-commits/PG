import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactTopic, setContactTopic] = useState<string>('Infrastructure');
  const [contactOfficeId, setContactOfficeId] = useState<string>('delhi-hq');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquire = (topic: string) => {
    setContactTopic(topic);
    scrollToSection('contact');
  };

  const handleVerticalSelect = (verticalId: string) => {
    if (verticalId === 'infrastructure') {
      scrollToSection('infrastructure');
    } else if (verticalId === 'real-estate') {
      scrollToSection('projects');
    } else {
      scrollToSection('capabilities');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      {/* Header */}
      <Header 
        onNavigate={scrollToSection} 
        onInquireClick={() => handleInquire('General Infrastructure & Realty Inquiry')} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onAboutClick={() => scrollToSection('about')}
          onCapabilitiesClick={() => scrollToSection('capabilities')}
        />

        {/* About Section */}
        <AboutSection
          onExploreProjects={() => scrollToSection('projects')}
          onExploreInfrastructure={() => scrollToSection('infrastructure')}
        />

        {/* Core Capabilities - Infrastructure & Real Estate */}
        <CapabilitiesSection
          onSelectVertical={handleVerticalSelect}
        />

        {/* Dedicated Infrastructure Section */}
        <InfrastructureSection
          onContactInquiry={handleInquire}
          onSelectProject={(project) => setSelectedProject(project)}
          onExplorePortfolio={() => scrollToSection('projects')}
        />

        {/* Real Estate & Project Portfolio */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onQuickInquiry={(projectName) => handleInquire(`Project Inquiry: ${projectName}`)}
        />

        {/* News & Official Bulletins */}
        <NewsSection />

        {/* Contact & Nationwide Office Directory */}
        <ContactSection
          initialTopic={contactTopic}
          initialOfficeId={contactOfficeId}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => {
          setSelectedProject(null);
          handleInquire(`Project: ${projectName}`);
        }}
      />
    </div>
  );
}
