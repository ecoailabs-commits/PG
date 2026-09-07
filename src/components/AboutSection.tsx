import React from 'react';
import { ArrowRight, CheckCircle2, Building, Compass, History, Shield, Globe } from 'lucide-react';
import { COMPANY_BRAND } from '../data/prabhatamData';

interface AboutSectionProps {
  onDiscoverStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>About Prabhatam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Experience Built Over Decades.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Prabhatam Group describes itself as a diversified business house with a history spanning approximately 50 years, anchoring enterprise excellence across Infrastructure, Real Estate, Media, and Aviation.
          </p>
        </div>

        {/* Two-Column Corporate Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-sm">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                <History className="w-5 h-5 text-amber-500" />
                <span>Foundational Roots in Rashtriya Advertising Agency</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The organisation’s journey originated in Rashtriya Advertising Agency, the pioneering family enterprise established by Shri I.P. Gupta. In 1977, Mr. Dinesh Gupta joined the enterprise, initiating an era of strategic transformation. Over subsequent decades, the firm channeled its execution rigor and communications scale into large-scale nationwide domains.
              </p>
            </div>

            <p className="text-slate-300">
              Through strategic institutional foresight, the group transitioned from outdoor and broadcast communication networks to high-value capital assets — delivering organized shopping complexes, master-planned townships, mountain highway signage installations, civil road widening, and licensed aviation charter mobility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-4 bg-slate-950/50 border border-slate-800/80 rounded-sm">
                <Shield className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Governance</h4>
                  <p className="text-xs text-slate-400 mt-1">Disciplined project compliance, ethical oversight, and transparent long-term stakeholder stewardship.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-950/50 border border-slate-800/80 rounded-sm">
                <Globe className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">National Footprint</h4>
                  <p className="text-xs text-slate-400 mt-1">Established operational hubs across Delhi, Bhopal, Dhanbad, Indore, Amritsar, Dehradun, and Ranchi.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onDiscoverStory}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider transition-all rounded-sm hover:border-amber-400"
              >
                <span>Discover Our Story & Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Architectural Feature Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Architectural Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                  <span className="uppercase tracking-widest font-semibold text-amber-400">Evolution Overview</span>
                  <span>1977 — Present</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Founding Core:</span>
                    <span className="font-medium text-white">Rashtriya Advertising Agency</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Realty Flagship:</span>
                    <span className="font-medium text-white">Prabhatam Heights (2002)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Aviation Entry:</span>
                    <span className="font-medium text-white">Prabhatam Aviation NSOP (2007)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Infrastructure Wing:</span>
                    <span className="font-medium text-white">Prabhatam Infrastructure (2011)</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800">
                  "Engineering infrastructure, developing spaces and creating long-term value."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
