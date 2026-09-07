import React from 'react';
import { 
  Plane, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Mountain
} from 'lucide-react';

export const AviationSection: React.FC = () => {
  return (
    <section id="aviation" className="py-20 lg:py-28 bg-slate-900/50 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Plane className="w-4 h-4" />
            <span>Air Mobility & Charters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Prabhatam Aviation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Operating Non-Scheduled Operator Permit (NSOP) services, helicopter flights, and sacred pilgrimage charter connectivity since 2007.
          </p>
        </div>

        {/* Hero Card for Aviation */}
        <div className="bg-slate-950 border border-slate-800 rounded-sm overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
                alt="Aviation Charter Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-indigo-300 text-xs font-bold font-mono uppercase tracking-widest rounded">
                  Est. 2007
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  NSOP Licensed Operator
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1 mb-4">
                  Precision Flight Operations & Critical Mobility
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Prabhatam Aviation commenced operations in 2007 with a commitment to high-standard air mobility. Governed by DGCA safety mandates and flown by internationally trained pilots and crew, our charter operations encompass corporate aviation, remote geographic access, and sacred pilgrimage circuits.
                </p>

                {/* Fly Divine Initiative Card */}
                <div className="p-4 rounded bg-slate-900 border border-slate-800 mb-6">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Fly Divine Intrastate Initiative (2012)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Launched in 2012 in partnership with the Government of Madhya Pradesh, Fly Divine provided scheduled local air taxi and charter linkages connecting regional trade hubs and tourist destinations across Central India.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Pilots & Crew: Internationally Trained & Certified</span>
                <span className="text-indigo-400 font-semibold">DGCA / NSOP Certified</span>
              </div>

            </div>

          </div>
        </div>

        {/* Aviation Capabilities 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-sm bg-slate-950 border border-slate-800">
            <Plane className="w-6 h-6 text-indigo-400 mb-4" />
            <h4 className="text-base font-bold text-white mb-2">NSOP Charter Flights</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tailored business charters delivering time-critical transit for corporate leadership, institutional delegations, and specialized logistics.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-slate-950 border border-slate-800">
            <Compass className="w-6 h-6 text-indigo-400 mb-4" />
            <h4 className="text-base font-bold text-white mb-2">Helicopter Operations</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rotary-wing point-to-point transfers across remote topographies, inaccessible project sites, and aerial survey corridors.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-slate-950 border border-slate-800">
            <Mountain className="w-6 h-6 text-indigo-400 mb-4" />
            <h4 className="text-base font-bold text-white mb-2">Pilgrimage Charters</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dedicated sacred circuits facilitating seamless, high-safety transit for devotees visiting revered shrines across Northern and Central India.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-slate-950 border border-slate-800">
            <ShieldCheck className="w-6 h-6 text-indigo-400 mb-4" />
            <h4 className="text-base font-bold text-white mb-2">Safety Standards</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adhering to rigorous maintenance protocols, avionics checks, and regulatory standards governed by DGCA compliance frameworks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
