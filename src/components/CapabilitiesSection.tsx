import React, { useState } from 'react';
import { 
  Building2, 
  Car, 
  Radio, 
  Plane, 
  Sprout, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { BUSINESS_VERTICALS } from '../data/prabhatamData';
import { BusinessVertical } from '../types';

interface CapabilitiesSectionProps {
  onSelectVertical: (verticalId: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectVertical }) => {
  const [activeVerticalId, setActiveVerticalId] = useState<string>('infrastructure');

  const activeVertical = BUSINESS_VERTICALS.find(v => v.id === activeVerticalId) || BUSINESS_VERTICALS[0];

  const getVerticalIcon = (id: string) => {
    switch (id) {
      case 'infrastructure':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'real-estate':
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'media':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'aviation':
        return <Plane className="w-5 h-5 text-indigo-400" />;
      case 'agrofresh':
        return <Sprout className="w-5 h-5 text-teal-400" />;
      default:
        return <Building2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Integrated Enterprise Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Spanning heavy civil infrastructure, master-planned townships, digital communications, licensed air charter mobility, and sustainable agritech.
          </p>
        </div>

        {/* Vertical Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {BUSINESS_VERTICALS.map((vertical) => {
            const isActive = activeVerticalId === vertical.id;
            return (
              <button
                key={vertical.id}
                onClick={() => setActiveVerticalId(vertical.id)}
                className={`p-4 text-left rounded-sm border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {vertical.number}
                  </span>
                  {getVerticalIcon(vertical.id)}
                </div>
                <div>
                  <h3 className={`text-sm font-bold tracking-wide uppercase font-sans ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {vertical.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {vertical.id === 'agrofresh' ? 'AI/ML Farming' : vertical.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-sm overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image & Overlay */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[480px]">
              <img
                src={activeVertical.image}
                alt={activeVertical.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-bold font-mono tracking-widest uppercase rounded">
                  Vertical {activeVertical.number}
                </span>
              </div>
            </div>

            {/* Content & Capabilities Checklist */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{activeVertical.tagline}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-editorial mb-4">
                  {activeVertical.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {activeVertical.description}
                </p>

                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                  Key Capabilities & Execution Scope
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeVertical.capabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2.5 p-2.5 rounded bg-slate-900/60 border border-slate-800/60 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="font-medium leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  {activeVertical.id === 'infrastructure' && 'Executing projects with experienced engineering teams and global collaboration.'}
                  {activeVertical.id === 'real-estate' && 'From Punjabi Bagh, Delhi to Dhanbad Grand Mall and 125-acre Golden Utopia.'}
                  {activeVertical.id === 'media' && 'Outdoor Ad – Forever Ahead & DAWN wireless networks.'}
                  {activeVertical.id === 'aviation' && 'Licensed NSOP charter operations and pilgrimage circuits.'}
                  {activeVertical.id === 'agrofresh' && 'AI/ML predictive disease modeling and yield optimization.'}
                </p>

                <button
                  onClick={() => onSelectVertical(activeVertical.id)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:translate-y-0.5"
                >
                  <span>Explore {activeVertical.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
