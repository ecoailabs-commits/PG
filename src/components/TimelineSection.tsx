import React, { useState } from 'react';
import { Calendar, ChevronRight, CheckCircle, Milestone, Award, Building, Plane, Radio, Heart } from 'lucide-react';
import { TIMELINE_DATA } from '../data/prabhatamData';
import { TimelineMilestone } from '../types';

export const TimelineSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const categories = ['All', 'Foundation', 'Real Estate', 'Infrastructure', 'Aviation', 'Media', 'CSR'];

  const filteredMilestones = selectedCategory === 'All' 
    ? TIMELINE_DATA 
    : TIMELINE_DATA.filter(m => m.category === selectedCategory);

  const activeMilestone: TimelineMilestone = filteredMilestones[activeMilestoneIndex] || filteredMilestones[0] || TIMELINE_DATA[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Foundation':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Real Estate':
        return <Building className="w-4 h-4 text-emerald-400" />;
      case 'Infrastructure':
        return <Milestone className="w-4 h-4 text-amber-500" />;
      case 'Aviation':
        return <Plane className="w-4 h-4 text-indigo-400" />;
      case 'Media':
        return <Radio className="w-4 h-4 text-sky-400" />;
      case 'CSR':
        return <Heart className="w-4 h-4 text-rose-400" />;
      default:
        return <Calendar className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Corporate Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
              Five Decades of Enterprise
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              Factual milestones published by Prabhatam Group, tracing our generational evolution from Rashtriya Advertising to a diversified national infrastructure enterprise.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveMilestoneIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-sm ${
                  selectedCategory === cat 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Horizontal Timeline Scroller */}
        <div className="relative mb-12 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="flex items-center space-x-6 min-w-max px-2">
            {filteredMilestones.map((item, index) => {
              const isSelected = activeMilestone.year === item.year;
              return (
                <button
                  key={`${item.year}-${index}`}
                  onClick={() => setActiveMilestoneIndex(index)}
                  className={`group relative text-left p-4 rounded-sm border transition-all duration-200 min-w-[200px] ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xl font-black tracking-tight font-editorial ${
                      isSelected ? 'text-amber-400' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {item.year}
                    </span>
                    <span className="p-1 rounded bg-slate-800/60">
                      {getCategoryIcon(item.category)}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </p>
                  
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {item.category}
                  </span>

                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rotate-45"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight Milestone Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">
                {getCategoryIcon(activeMilestone.category)}
                <span>{activeMilestone.category} Milestone</span>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-white font-editorial tracking-tight">
                {activeMilestone.year}
              </div>
              {activeMilestone.highlightMetric && (
                <div className="mt-4 inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {activeMilestone.highlightMetric}
                </div>
              )}
            </div>

            <div className="lg:col-span-9 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-editorial">
                {activeMilestone.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeMilestone.description}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                <span>Verified factual milestone published in Prabhatam Group records.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline Stepper (Vertical summary for comprehensive overview) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-sm">
            <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">1977 — 1990</span>
            <p className="text-slate-300 font-medium">Foundations in communications, national events (Mahabharat 1984), and Keshav Dharmarth Trust philanthropic launch (1990).</p>
          </div>
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-sm">
            <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">2002 — 2010</span>
            <p className="text-slate-300 font-medium">Expansion into real estate (Prabhatam Heights), licensed aviation NSOP charter operations (2007), and Prabhatam Grand Mall (2010).</p>
          </div>
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-sm">
            <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">2011 — Present</span>
            <p className="text-slate-300 font-medium">Launch of Prabhatam Infrastructure with Uttarakhand highway signage (2,048 units), Fly Divine MP charter service (2012), and modern agritech.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
