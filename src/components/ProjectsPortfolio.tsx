import React, { useState, useMemo } from 'react';
import { 
  Building, 
  MapPin, 
  ArrowRight, 
  Maximize2, 
  Search, 
  Filter, 
  CheckCircle2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/prabhatamData';
import { Project, ProjectCategory } from '../types';

interface ProjectsPortfolioProps {
  onSelectProject: (project: Project) => void;
  onQuickInquiry: (projectName: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({
  onSelectProject,
  onQuickInquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Mixed Use',
    'Infrastructure',
    'Township'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
      const matchesSearch = 
        proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
              Spaces Designed for Living, Business & Growth
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl font-sans">
              From landmark retail destinations and luxury urban residences to 125-acre integrated townships and mountain highway connectivity.
            </p>
          </div>

          {/* Search & Counter */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or city..."
                className="pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors w-52 sm:w-64"
              />
            </div>
            <span className="text-xs text-slate-400 font-mono px-2.5 py-2 bg-slate-950 border border-slate-800 rounded-sm">
              {filteredProjects.length} Projects
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all rounded-sm ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-950 border border-slate-800/90 rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-medium text-slate-300">
                      {project.status}
                    </span>
                  </div>

                  {/* Scale / Area Badge */}
                  {(project.area || project.landArea) && (
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300 px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800">
                      {project.area ? project.area.split('+')[0] : project.landArea}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-xs text-slate-400 space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-editorial">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-900 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onQuickInquiry(project.name)}
                  className="text-[11px] text-slate-400 hover:text-white uppercase tracking-wider font-semibold py-1 px-2.5 rounded hover:bg-slate-900 transition-colors"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-950 border border-slate-800 rounded-sm">
            <Building className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-base text-slate-300 font-semibold">No projects matching your search</p>
            <p className="text-xs text-slate-400 mt-1">Try selecting "All" or using different keywords.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-800 text-amber-400 rounded-sm text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
