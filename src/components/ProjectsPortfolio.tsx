import React, { useState, useMemo } from 'react';
import { 
  Building, 
  MapPin, 
  ArrowRight, 
  Search, 
  ShieldCheck,
  Building2,
  Route
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
  const [activeDivision, setActiveDivision] = useState<'All' | 'Real Estate' | 'Infrastructure'>('All');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories dynamically adjusted based on division
  const realEstateCategories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Mixed Use', 'Township'];
  const infraCategories: ProjectCategory[] = ['All', 'Infrastructure'];
  const allCategories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Mixed Use', 'Township', 'Infrastructure'];

  const currentCategoryList = useMemo(() => {
    if (activeDivision === 'Real Estate') return realEstateCategories;
    if (activeDivision === 'Infrastructure') return infraCategories;
    return allCategories;
  }, [activeDivision]);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesDivision = 
        activeDivision === 'All' || 
        proj.officialDivision === activeDivision;

      const matchesCategory = 
        activeCategory === 'All' || 
        proj.category === activeCategory;

      const matchesSearch = 
        proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.landArea && proj.landArea.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (proj.area && proj.area.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesDivision && matchesCategory && matchesSearch;
    });
  }, [activeDivision, activeCategory, searchQuery]);

  const realEstateCount = PROJECTS_DATA.filter(p => p.officialDivision === 'Real Estate').length;
  const infraCount = PROJECTS_DATA.filter(p => p.officialDivision === 'Infrastructure').length;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Official Corporate Registry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
              Real Estate & Infrastructure Portfolio
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl font-sans">
              Strictly verified developments published across Prabhatam Group&apos;s real estate and infrastructure divisions.
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
                placeholder="Search projects, location, scale..."
                className="pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors w-56 sm:w-64"
              />
            </div>
            <span className="text-xs text-amber-400 font-mono px-3 py-2 bg-slate-950 border border-slate-800 rounded-sm whitespace-nowrap font-bold">
              {filteredProjects.length} Projects
            </span>
          </div>
        </div>

        {/* Division Overview Banner */}
        <div className="mb-8 p-4 rounded-sm bg-slate-950 border border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">Official Corporate Registry</span>
              <span className="text-slate-400">
                Explore verified projects across Prabhatam Group&apos;s Real Estate and Infrastructure divisions.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-sm bg-slate-900 border border-slate-800 text-amber-400 font-semibold flex items-center space-x-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Real Estate: {realEstateCount} Developments</span>
            </span>
            <span className="px-3 py-1.5 rounded-sm bg-slate-900 border border-slate-800 text-cyan-300 font-semibold flex items-center space-x-1.5">
              <Route className="w-3.5 h-3.5" />
              <span>Infrastructure: {infraCount} Projects</span>
            </span>
          </div>
        </div>

        {/* Primary Division Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 p-1.5 bg-slate-950 border border-slate-800 rounded-sm">
          <button
            onClick={() => {
              setActiveDivision('All');
              setActiveCategory('All');
            }}
            className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-center flex items-center justify-center space-x-2 ${
              activeDivision === 'All'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <span>All Verified Projects</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              activeDivision === 'All' ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400'
            }`}>
              {PROJECTS_DATA.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveDivision('Real Estate');
              setActiveCategory('All');
            }}
            className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-center flex items-center justify-center space-x-2 ${
              activeDivision === 'Real Estate'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <span>Real Estate Division</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              activeDivision === 'Real Estate' ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400'
            }`}>
              {realEstateCount}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveDivision('Infrastructure');
              setActiveCategory('All');
            }}
            className={`py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-center flex items-center justify-center space-x-2 ${
              activeDivision === 'Infrastructure'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <span>Infrastructure Division</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              activeDivision === 'Infrastructure' ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400'
            }`}>
              {infraCount}
            </span>
          </button>
        </div>

        {/* Secondary Category Filter Tabs */}
        {currentCategoryList.length > 1 && (
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-10 scrollbar-thin">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mr-1 shrink-0">
              Filter By Type:
            </span>
            {currentCategoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all rounded-sm ${
                  activeCategory === cat
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/50 font-bold'
                    : 'bg-slate-950 border border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

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
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded bg-slate-950/90 border border-slate-800">
                      {project.area ? project.area.split('+')[0] : project.landArea}
                    </div>
                  )}

                  {/* Division Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-amber-400 font-semibold">
                      {project.officialDivision || project.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {project.state}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-editorial">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Verified Fact Bullet */}
                  <div className="pt-2">
                    <div className="text-[11px] text-slate-400 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{project.facts[0]?.label}: <strong className="text-slate-200">{project.facts[0]?.value}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-900 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onQuickInquiry(project.name)}
                    className="text-[11px] text-slate-400 hover:text-white uppercase tracking-wider font-semibold py-1 px-2.5 rounded hover:bg-slate-900 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-950 border border-slate-800 rounded-sm">
            <Building className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-base text-slate-300 font-semibold">No projects matching your filter criteria</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting the division filter or search terms.</p>
            <button
              onClick={() => {
                setActiveDivision('All');
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
