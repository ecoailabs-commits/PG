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
  ArrowRight,
  MapPin,
  Maximize2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/prabhatamData';
import { Project } from '../types';
import highwayImg from '../assets/images/highway_engineering_1788779184588.jpg';

interface InfrastructureSectionProps {
  onContactInquiry: (topic: string) => void;
  onSelectProject?: (project: Project) => void;
  onExplorePortfolio?: () => void;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ 
  onContactInquiry,
  onSelectProject,
  onExplorePortfolio
}) => {
  const infraProjects = PROJECTS_DATA.filter((p) => p.officialDivision === 'Infrastructure');

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
        
        {/* Hero Header for Dedicated Infrastructure Division */}
        <div className="relative rounded-sm overflow-hidden border border-slate-800 bg-slate-900 mb-16 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src={highwayImg}
              alt="Highway and Bridge Infrastructure"
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
                onClick={() => onContactInquiry('Infrastructure Division Inquiry')}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-md flex items-center space-x-2"
              >
                <span>Inquire for Infrastructure Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {onExplorePortfolio && (
                <button
                  onClick={onExplorePortfolio}
                  className="px-5 py-3 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 font-semibold uppercase tracking-wider text-xs rounded-sm transition-all"
                >
                  View Real Estate & Infra Portfolio
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Featured Infrastructure Projects Section */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Official Undertakings
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
                Infrastructure Projects & Deployments
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Official infrastructure projects executed across roads, highways, telecommunications networks, and green technology corridors.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded border border-slate-800 w-fit">
              {infraProjects.length} Verified Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraProjects.map((project) => (
              <div 
                key={project.id}
                className="rounded-sm bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-950/90 border border-slate-700 text-[10px] font-mono text-amber-400 uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-bold uppercase text-slate-300 border border-slate-800">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{project.state}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-editorial">
                      {project.name}
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 py-3 border-t border-slate-800/80 mb-4 text-[11px]">
                      {project.facts.slice(0, 2).map((fact, idx) => (
                        <div key={idx} className="flex justify-between items-center text-slate-400">
                          <span>{fact.label}:</span>
                          <span className="text-white font-medium">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    {onSelectProject && (
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold rounded-sm transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Project Details</span>
                      </button>
                    )}
                    <button
                      onClick={() => onContactInquiry(`Project Inquiry: ${project.name}`)}
                      className="py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-sm transition-colors uppercase tracking-wider"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
            <p className="text-slate-400 text-sm mt-2">
              Comprehensive expertise across civil engineering, highway retro-reflective safety, turnkey telecom structures, and public infrastructure.
            </p>
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
