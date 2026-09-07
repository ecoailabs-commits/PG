import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Maximize2, 
  Calendar, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [project.heroImage, ...(project.gallery || [])];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{project.location}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Main Title & Scale Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-editorial tracking-tight">
                {project.name}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="text-left md:text-right shrink-0">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Development Status</div>
              <div className="text-sm font-bold text-amber-400 flex items-center md:justify-end space-x-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{project.status}</span>
              </div>
              {(project.area || project.landArea) && (
                <div className="text-xs text-slate-400 mt-1">
                  Scale: <span className="text-white font-semibold">{project.area || project.landArea}</span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Image Gallery Viewer */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-800">
              <img
                src={allImages[activeImageIndex]}
                alt={`${project.name} photo ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white border border-slate-700 backdrop-blur-sm transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-slate-800">
                {activeImageIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-sm overflow-hidden border shrink-0 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-amber-400 ring-2 ring-amber-400/20' 
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Overview & Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Overview & Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                  Project Overview & Scope
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.detailedOverview}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
                  Architectural & Planning Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2 text-xs text-slate-300 p-2.5 rounded bg-slate-950/60 border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.sourceNote && (
                <div className="p-3.5 rounded bg-slate-950/80 border border-amber-500/20 text-xs text-amber-200/90 flex items-start space-x-2.5">
                  <Info className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-300 block">Verified Factual Attribution</span>
                    <span>{project.sourceNote}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Fact Sheet & Specifications Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-950 p-6 rounded-sm border border-slate-800 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold pb-2 border-b border-slate-800">
                  Technical Specifications
                </h4>

                <div className="space-y-3 text-xs">
                  {project.facts.map((fact, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1.5 border-b border-slate-900">
                      <span className="text-slate-400">{fact.label}</span>
                      <span className="text-white font-semibold text-right max-w-[60%]">{fact.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-900">
                    <span className="text-slate-400">Regional Jurisdiction</span>
                    <span className="text-white font-semibold">{project.state}, India</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400">Parent Entity</span>
                    <span className="text-white font-semibold">Prabhatam Group</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => {
                      onClose();
                      onInquire(project.name);
                    }}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Inquire About This Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 text-xs text-slate-500 flex items-center justify-between">
          <span>Prabhatam Infra Ventures Portfolio • Strictly Factual Architecture</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white uppercase font-bold tracking-wider text-[11px]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
