import React from 'react';
import { 
  Leaf, 
  Cpu, 
  Sprout, 
  Droplets, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Sun
} from 'lucide-react';

interface SustainabilitySectionProps {
  onLearnMore?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onLearnMore }) => {
  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Leaf className="w-4 h-4" />
            <span>Ecological Stewardship & Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Building Responsibly.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Synthesizing green civil construction in fragile terrains, energy-conscious real estate design, and artificial intelligence for precision agriculture.
          </p>
        </div>

        {/* Highlight Feature: Prabhatam Agrofresh */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-900/50 rounded-sm p-8 sm:p-12 mb-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Featured Venture: Prabhatam Agrofresh</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
                Technology-Driven Sustainable Farm Management
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Prabhatam Agrofresh integrates decades of agricultural know-how with cutting-edge artificial intelligence and machine learning (AI/ML) algorithms. By modeling crop phenotypes and atmospheric data, our platforms achieve early plant disease prediction and enhanced yield predictability while rigorously minimizing chemical runoff.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>AI/ML Disease Prediction</span>
                  </div>
                  <p className="text-xs text-slate-300">Algorithmic scanning identifies microscopic pathogen risks before crop blight spreads, reducing pesticide reliance.</p>
                </div>

                <div className="p-4 rounded bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span>Yield Predictability</span>
                  </div>
                  <p className="text-xs text-slate-300">Data-driven harvest scheduling and soil moisture tracking stabilizes commercial output and food security.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-slate-800 shadow-xl">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable Agriculture and Agrofresh Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
                <p className="font-semibold text-white">Eco-Friendly Agritech</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Combining agriculture expertise with computational modeling.</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars of Corporate Responsibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-sm bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Green Mountain Infrastructure</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prioritizing low-impact construction technologies, terrain slope protection, and durable non-electric retro-reflective signage systems across high-altitude Himalayan sectors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              Terrain-Sensitive Civil Engineering
            </div>
          </div>

          <div className="p-6 rounded-sm bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Responsible Urban Planning</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Incorporating generous tree canopies, stormwater drainage corridors, and natural cross-ventilation across master-planned townships like Golden Utopia and Oyster City.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              Vastu & Environmental Harmony
            </div>
          </div>

          <div className="p-6 rounded-sm bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Community & Water Conservation</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Groundwater preservation, rainwater collection provisions, and community healthcare outreach delivered through the Keshav Dharmarth Trust.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
              Holistic Stakeholder Value
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
