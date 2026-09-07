import React from 'react';
import { 
  Route, 
  Signpost, 
  Radio, 
  TowerControl, 
  HardHat, 
  Briefcase, 
  Wrench, 
  Building, 
  Leaf, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Clock,
  MapPin
} from 'lucide-react';
import { INFRASTRUCTURE_ACHIEVEMENTS } from '../data/prabhatamData';

interface InfrastructureSectionProps {
  onContactInquiry: (topic: string) => void;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ onContactInquiry }) => {
  const capabilities = [
    {
      title: 'Roads & Highways',
      description: 'Strengthening, widening, and asphalt pavement engineering for national and major district roads.',
      icon: <Route className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Road Signage',
      description: 'High-altitude retro-reflective and overhead highway signage systems engineered for public transit safety.',
      icon: <Signpost className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Telecom Infrastructure',
      description: 'Turnkey optical fiber laying, cellular ground stations, and passive telecommunications backbones.',
      icon: <Radio className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Mobile Telecom Towers',
      description: 'Structural tower erection, structural safety certification, and ongoing transmission maintenance.',
      icon: <TowerControl className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'EPC Projects',
      description: 'Full Engineering, Procurement, and Construction contracts delivered within tight milestone regimes.',
      icon: <HardHat className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'BOT Projects',
      description: 'Build-Operate-Transfer concession frameworks creating long-term commercial and public infrastructure assets.',
      icon: <Briefcase className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Engineering & Technical Support',
      description: 'Experienced civil, geotechnical, and structural engineering teams overseeing rigorous QA/QC.',
      icon: <Wrench className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Infrastructure Development',
      description: 'Global collaboration with international infrastructure organisations on national priority developments.',
      icon: <Building className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="infrastructure" className="py-20 lg:py-28 bg-slate-950 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header for Infrastructure */}
        <div className="relative rounded-sm overflow-hidden border border-slate-800 bg-slate-900 mb-16 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80"
              alt="Highway Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Dedicated Division</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
              Engineering Infrastructure. Enabling Progress.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Prabhatam Infrastructure is involved in national and global infrastructure projects, collaborating with international infrastructure organisations and executing projects with experienced engineering and technical teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onContactInquiry('Infrastructure')}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-md"
              >
                Inquire for Infrastructure Projects
              </button>
            </div>
          </div>
        </div>

        {/* Featured Source-Backed Achievements Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Verified Project Performance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
              Featured Track Record
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Factual milestones derived strictly from official Prabhatam Infrastructure records without extrapolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Achievement 01: Uttarakhand Highway Signage */}
            <div className="p-8 rounded-sm bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
              
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="flex items-center space-x-1.5 font-mono text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Uttarakhand Network</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold uppercase text-slate-300">
                    Completed
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-editorial mb-2">
                  2,048
                </div>
                <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
                  Highway & Road Signages Installed
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Uttarakhand Highway & Road Signage Project
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "Successfully installed 2,048 highway and road signages in Uttarakhand." Fabricated and anchored across severe Himalayan topographies to guarantee public safety and transit visibility along strategic mountain arteries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Terrain: High-Altitude Himalayan Roads</span>
                <span className="text-amber-400/80 font-medium">Prabhatam Infrastructure</span>
              </div>
            </div>

            {/* Achievement 02: UP Road Project */}
            <div className="p-8 rounded-sm bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
              
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="flex items-center space-x-1.5 font-mono text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Uttar Pradesh MDR</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold uppercase text-slate-300">
                    Completed in 8 Months
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-editorial mb-2">
                  8 Months
                </div>
                <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
                  Turnaround Completion Time
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Sikandra–Jhinjhak–Rasulabad Road Project
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "Strengthening and widening of the Sikandra–Jhinjhak–Rasulabad MDR (KM-21–40), completed in 8 months." Rigorous engineering execution, heavy bituminous paving, and drainage protection delivered on an accelerated schedule.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Scope: KM-21 to KM-40 (19 km)</span>
                <span className="text-amber-400/80 font-medium">Prabhatam Infrastructure</span>
              </div>
            </div>

          </div>
        </div>

        {/* Our Capabilities Grid */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Execution Scope
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
              Infrastructure Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-sm bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900"
              >
                <div className="p-2.5 rounded bg-slate-800/80 w-fit mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Green Infrastructure Vision */}
        <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-900/40 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Green Engineering Commitment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mb-3">
              Green Infrastructure in Sensitive & Remote Topographies
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Prabhatam Infrastructure advances a clear corporate vision: building, reinforcing, and strengthening highways and roads using green technology, particularly in remote, high-altitude, and environmentally sensitive terrains where traditional heavy carbon footprints must be minimized.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-3 bg-slate-950/60 rounded border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Cold Mix Asphalt</span>
                <span>Low-emission road paving suitable for fragile Himalayan ecosystems.</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Slope Bio-Engineering</span>
                <span>Natural vegetation and geotechnical reinforcement preventing landslide hazards.</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Durable Roadway Safety</span>
                <span>Retro-reflective signage materials requiring zero continuous electric grid draw.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
