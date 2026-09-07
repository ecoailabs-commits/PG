import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectMap } from './components/ProjectMap';
import { LeadershipSection } from './components/LeadershipSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { CSRSection } from './components/CSRSection';
import { MediaSection } from './components/MediaSection';
import { AviationSection } from './components/AviationSection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { CareersSection } from './components/CareersSection';
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

  const handleNavigateToOffice = (officeId: string) => {
    setContactOfficeId(officeId);
    scrollToSection('contact');
  };

  const handleVerticalSelect = (verticalId: string) => {
    if (verticalId === 'infrastructure') {
      scrollToSection('infrastructure');
    } else if (verticalId === 'real-estate') {
      scrollToSection('projects');
    } else if (verticalId === 'media') {
      scrollToSection('media');
    } else if (verticalId === 'aviation') {
      scrollToSection('aviation');
    } else if (verticalId === 'agrofresh') {
      scrollToSection('sustainability');
    } else {
      scrollToSection('capabilities');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      {/* Header */}
      <Header 
        onNavigate={scrollToSection} 
        onInquireClick={() => handleInquire('General Enterprise Inquiry')} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onDiscoverCapabilities={() => scrollToSection('capabilities')}
        />

        {/* About Section */}
        <AboutSection
          onDiscoverStory={() => scrollToSection('timeline')}
        />

        {/* Company Timeline */}
        <TimelineSection />

        {/* Core Capabilities */}
        <CapabilitiesSection
          onSelectVertical={handleVerticalSelect}
        />

        {/* Dedicated Infrastructure Section */}
        <InfrastructureSection
          onContactInquiry={handleInquire}
        />

        {/* Real Estate & Project Portfolio */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onQuickInquiry={(projectName) => handleInquire(`Project Inquiry: ${projectName}`)}
        />

        {/* Interactive India Project Map */}
        <ProjectMap
          onSelectProject={(project) => setSelectedProject(project)}
          onNavigateToOffice={handleNavigateToOffice}
        />

        {/* Leadership & Executive Board */}
        <LeadershipSection />

        {/* Sustainability & Agrofresh Agritech */}
        <SustainabilitySection
          onLearnMore={() => handleInquire('Sustainability & Agritech')}
        />

        {/* Corporate Social Responsibility (Lifeline / Keshav Dharmarth Trust) */}
        <CSRSection
          onInquireCSR={() => handleInquire('Prabhatam Lifeline CSR')}
        />

        {/* Media & Digital OOH (DAWN Networks) */}
        <MediaSection />

        {/* Prabhatam Aviation & Air Mobility */}
        <AviationSection />

        {/* Architecture & Project Gallery */}
        <GallerySection />

        {/* News & Official Bulletins */}
        <NewsSection />

        {/* Careers & Talent Acquisition */}
        <CareersSection />

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
