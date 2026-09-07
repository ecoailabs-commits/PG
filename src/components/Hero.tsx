import React from 'react';
import { ArrowRight, ShieldCheck, Award, Compass, ArrowUpRight } from 'lucide-react';
import { COMPANY_BRAND } from '../data/prabhatamData';
import heroBg from '../assets/images/infrastructure_hero_1788779159431.jpg';

interface HeroProps {
  onExploreProjects: () => void;
  onAboutClick: () => void;
  onCapabilitiesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onAboutClick,
  onCapabilitiesClick
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-slate-950">
      {/* Background Architectural Canvas with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern Corporate Infrastructure and Highway Engineering"
          className="w-full h-full object-cover object-center opacity-35 transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              {COMPANY_BRAND.tagline}
            </span>
          </div>

          {/* Core Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-editorial">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              Infrastructure
            </span>{' '}
            of Tomorrow.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
            {COMPANY_BRAND.name} brings together high-impact infrastructure development, highway engineering, and master-planned real estate habitats to create enduring value.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-slate-950 uppercase transition-all duration-200 bg-amber-500 hover:bg-amber-400 rounded-sm shadow-xl hover:shadow-amber-500/20 active:translate-y-0.5"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={onAboutClick}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-sm hover:border-amber-500/40"
            >
              <span>ABOUT PRABHATAM</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-400" />
            </button>
          </div>

        </div>
      </div>

      {/* Factual Statistics & Indicators Bar (Strictly Derived from Source) */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="border-l-2 border-amber-500/80 pl-4 py-1">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-editorial">
                  ~50
                </span>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Years</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
                Prabhatam Group Heritage
              </p>
            </div>

            <div className="border-l-2 border-slate-700 hover:border-amber-500 transition-colors pl-4 py-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-editorial">
                EPC / BOT
              </div>
              <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
                Infrastructure & Roads
              </p>
            </div>

            <div className="border-l-2 border-slate-700 hover:border-amber-500 transition-colors pl-4 py-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-editorial">
                Master-Planned
              </div>
              <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
                Townships & Malls
              </p>
            </div>

            <div className="border-l-2 border-slate-700 hover:border-amber-500 transition-colors pl-4 py-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-editorial">
                Pan-India
              </div>
              <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
                Highways & Habitats
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
