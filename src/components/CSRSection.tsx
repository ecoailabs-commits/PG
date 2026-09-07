import React from 'react';
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Users, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  HandHeart
} from 'lucide-react';
import { CSR_DATA } from '../data/prabhatamData';

interface CSRSectionProps {
  onInquireCSR?: () => void;
}

export const CSRSection: React.FC<CSRSectionProps> = ({ onInquireCSR }) => {
  return (
    <section id="csr" className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Heart className="w-4 h-4 fill-current" />
            <span>Corporate Social Responsibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Nation Building Beyond Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Delivering healthcare, clinical diagnostic screenings, and humanitarian relief to vulnerable and underprivileged communities since 1990.
          </p>
        </div>

        {/* Featured Impact Showcase Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px]">
              <img
                src={CSR_DATA.image}
                alt="Healthcare and Medical Camp Support"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                <span className="text-rose-400 font-bold uppercase tracking-wider block mb-1">
                  In-House Philanthropic Foundation
                </span>
                <p className="text-white font-medium">
                  {CSR_DATA.trustName} — Founded in {CSR_DATA.foundedYear}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Prabhatam Lifeline Mission
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1 mb-4">
                  Community Healthcare & Diagnostic Outreach
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {CSR_DATA.description}
                </p>

                <div className="p-4 rounded bg-slate-900/80 border border-slate-800 mb-6">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider mb-1">
                    <Users className="w-4 h-4 text-rose-400" />
                    <span>Social Partnership: Association with {CSR_DATA.partnerAssociation}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collaborating closely with Seva Bharti to extend disaster relief, medical camps, hygiene kits, and health monitoring programs into remote settlements.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  30+ Years of Sustained Humanitarian Service
                </span>
                {onInquireCSR && (
                  <button
                    onClick={onInquireCSR}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-950 hover:bg-rose-900 border border-rose-800 text-rose-200 text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                  >
                    <span>Connect with Lifeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* 4 Core Impact Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CSR_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-slate-950 border border-slate-800 hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-rose-950/40 border border-rose-900/40 flex items-center justify-center text-rose-400 mb-4">
                  {idx === 0 && <Heart className="w-5 h-5" />}
                  {idx === 1 && <Stethoscope className="w-5 h-5" />}
                  {idx === 2 && <ShieldAlert className="w-5 h-5" />}
                  {idx === 3 && <Users className="w-5 h-5" />}
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 text-[10px] uppercase tracking-wider font-mono text-slate-400">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
