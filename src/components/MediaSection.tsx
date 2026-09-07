import React from 'react';
import { 
  Radio, 
  Tv, 
  Layers, 
  Wifi, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  MonitorPlay,
  Globe
} from 'lucide-react';

export const MediaSection: React.FC = () => {
  const mediaCapabilities = [
    {
      title: 'Outdoor Advertising (OOH)',
      tagline: 'Outdoor Ad – Forever Ahead',
      description: 'Prime arterial billboards, mega gantries, unipoles, and high-impact transit media across key metro transit corridors.',
      icon: <Layers className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'DAWN: Digital Wireless Networks',
      tagline: 'Digital Advertising Wireless Networks',
      description: 'Intelligent digital LED outdoor screens interconnected through wireless feeds for dynamic real-time campaigns.',
      icon: <Wifi className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Print Media & Campaigns',
      tagline: 'Integrated Media Planning',
      description: 'Strategic placement across leading national English and vernacular dailies, periodicals, and financial journals.',
      icon: <Radio className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Broadcast & Networking',
      tagline: 'Multi-Channel Integration',
      description: 'Television, radio, and electronic media buying with seamless scheduling and post-campaign analytics.',
      icon: <Tv className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Marquee Event Management',
      tagline: 'Since 1984 Mahabharat Event',
      description: 'From pioneering large-scale theatrical and cultural festivals to national summits and corporate expos.',
      icon: <Calendar className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="media" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Radio className="w-4 h-4" />
            <span>Communications & Digital Networks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Media, Outdoor & Digital Advertising
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Rooted in Rashtriya Advertising Agency since 1977 and pioneering modern LED networks through DAWN (Digital Advertising Wireless Networks).
          </p>
        </div>

        {/* Hero Card for DAWN & OOH */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 rounded-sm p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-wider">
                <Wifi className="w-3.5 h-3.5" />
                <span>DAWN Network Protocol</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
                "Outdoor Ad – Forever Ahead"
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Prabhatam’s communications footprint pioneered the transition from traditional hoardings to Digital Advertising Wireless Networks (DAWN). DAWN comprises high-definition LED displays situated in high-footfall commercial zones, airport corridors, and transit junctions, delivering real-time programmatic scheduling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2 p-2.5 bg-slate-950/60 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>High-Luminance Outdoor LEDs</span>
                </div>
                <div className="flex items-center space-x-2 p-2.5 bg-slate-950/60 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Centralized Wireless Content Sync</span>
                </div>
                <div className="flex items-center space-x-2 p-2.5 bg-slate-950/60 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Nationwide Major Transit Corridors</span>
                </div>
                <div className="flex items-center space-x-2 p-2.5 bg-slate-950/60 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Institutional Public Communication</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-slate-800 shadow-xl">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor Digital Advertising"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-white">Media Heritage</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Originating in Rashtriya Advertising Agency, family enterprise founded by Shri I.P. Gupta.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Media Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mediaCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded bg-slate-800/80 w-fit mb-3">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-sky-400/90 font-medium mb-2">
                  {item.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] uppercase font-mono text-slate-400">
                Sector 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
