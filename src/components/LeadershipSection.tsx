import React, { useState } from 'react';
import { Quote, Award, GraduationCap, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/prabhatamData';
import { LeadershipProfile } from '../types';

export const LeadershipSection: React.FC = () => {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const activeLeader = LEADERSHIP_DATA[activeLeaderIndex];

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Corporate Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Leadership & Vision
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-sans">
            Guided by generational business integrity, national development commitment, and rigorous corporate governance.
          </p>
        </div>

        {/* Leadership Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {LEADERSHIP_DATA.map((leader, index) => {
            const isSelected = activeLeaderIndex === index;
            return (
              <div
                key={leader.name}
                onClick={() => setActiveLeaderIndex(index)}
                className={`cursor-pointer rounded-sm border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-950 border-amber-500/80 shadow-2xl ring-1 ring-amber-500/20'
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div className="p-6 sm:p-8">
                  
                  {/* Portrait Placeholder & Role Header */}
                  <div className="flex items-start space-x-5 mb-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    </div>

                    <div className="flex-1">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 text-amber-400">
                        {leader.role}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial mt-1">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                        {leader.organization}
                      </p>
                      {leader.credentials && (
                        <p className="text-[11px] text-amber-300/80 mt-1.5 flex items-center space-x-1">
                          <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{leader.credentials}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Factual Executive Bio */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {/* Leadership Quote Banner */}
                  <div className="p-4 rounded bg-slate-900/80 border-l-2 border-amber-500 italic text-xs sm:text-sm text-slate-200 mb-6">
                    <Quote className="w-4 h-4 text-amber-500/60 mb-1" />
                    "{leader.messageQuote}"
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    {leader.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Click to view extended address</span>
                  <span className="text-amber-400 font-semibold">{isSelected ? 'Active Selection' : 'Select'} →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Leader Expanded Address */}
        <div className="bg-slate-950 border border-slate-800 rounded-sm p-6 sm:p-8 lg:p-10 relative">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Award className="w-4 h-4" />
              <span>Full Leadership Address — {activeLeader.name} ({activeLeader.role})</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial">
              Perspective on Nation Building & Corporate Resilience
            </h3>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              {activeLeader.fullMessage.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Published source message from Prabhatam Group executive archives.</span>
              <span className="text-amber-400 font-mono">Verified Factual Attribution</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
