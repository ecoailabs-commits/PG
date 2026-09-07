import React, { useState } from 'react';
import { Newspaper, ArrowRight, Clock, ShieldCheck, Tag } from 'lucide-react';
import { NEWS_BULLETINS } from '../data/prabhatamData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-20 lg:py-28 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4 text-amber-500" />
            <span>Official Dispatches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Corporate Insights & Bulletins
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Verified releases and documented project records published across Prabhatam Group operating verticals.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_BULLETINS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-sm bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{item.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-editorial mb-3 hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <p className="text-xs text-slate-400 border-l-2 border-slate-800 pl-3 italic mb-6">
                  {item.content}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.sourceAttribution}</span>
                </span>
                <span className="text-slate-400 font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
