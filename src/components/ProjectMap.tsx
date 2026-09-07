import React, { useState } from 'react';
import { MapPin, Building, ChevronRight, ExternalLink, ArrowRight, Compass } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA, OFFICE_LOCATIONS } from '../data/prabhatamData';

interface ProjectMapProps {
  onSelectProject: (project: Project) => void;
  onNavigateToOffice: (officeId: string) => void;
}

interface MapMarker {
  id: string;
  name: string;
  city: string;
  state: string;
  category: string;
  description: string;
  type: 'Project' | 'Corporate HQ' | 'Regional Hub';
  x: number; // Percentage coordinate on India map SVG
  y: number;
  projectId?: string;
  officeId?: string;
}

export const ProjectMap: React.FC<ProjectMapProps> = ({
  onSelectProject,
  onNavigateToOffice
}) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<string>('delhi-hq');

  const mapMarkers: MapMarker[] = [
    {
      id: 'delhi-hq',
      name: 'Corporate Headquarters & Victoria 55',
      city: 'New Delhi',
      state: 'Delhi',
      category: 'HQ / Luxury Residential',
      description: 'Corporate Headquarters at Ghalib Institute, Rouse Avenue, and Victoria 55 luxury residences in Punjabi Bagh.',
      type: 'Corporate HQ',
      x: 35,
      y: 28,
      projectId: 'victoria-55',
      officeId: 'delhi-hq'
    },
    {
      id: 'amritsar-utopia',
      name: 'Golden Utopia Township',
      city: 'Amritsar',
      state: 'Punjab',
      category: '125-Acre Township',
      description: 'Vastu-designed 125-acre integrated habitat with 3,000+ planned villas, apartments, school, and commercial hub.',
      type: 'Project',
      x: 27,
      y: 18,
      projectId: 'golden-utopia'
    },
    {
      id: 'dehradun-signage',
      name: 'Uttarakhand Signage Network & Branch',
      city: 'Dehradun',
      state: 'Uttarakhand',
      category: 'Infrastructure (2,048 Signages)',
      description: 'Statewide mountain highway safety signage operations and regional project branch at Doon University Road.',
      type: 'Project',
      x: 41,
      y: 23,
      projectId: 'uttarakhand-signage',
      officeId: 'dehradun-office'
    },
    {
      id: 'up-mdr',
      name: 'Sikandra–Jhinjhak–Rasulabad Highway',
      city: 'Sikandra / Kanpur Corridor',
      state: 'Uttar Pradesh',
      category: 'Highway Engineering',
      description: 'Strengthening and widening of 19 km major district road corridor delivered in an accelerated 8 months.',
      type: 'Project',
      x: 48,
      y: 36,
      projectId: 'up-mdr-highway'
    },
    {
      id: 'bhopal-hub',
      name: 'Prabhatam Heights & Prabhatam Plaza',
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      category: 'Township & Commercial Mall',
      description: '30,000 sq. ft. modern shopping complex, food court, and flagship residential community on Raisen Road.',
      type: 'Regional Hub',
      x: 39,
      y: 52,
      projectId: 'prabhatam-plaza',
      officeId: 'bhopal-heights'
    },
    {
      id: 'indore-hub',
      name: 'Oyster City & Prabhatam Castle',
      city: 'Indore',
      state: 'Madhya Pradesh',
      category: 'Township & Farmland Villas',
      description: '22.5-acre Oyster City villas and plots with residents moved in, plus Prabhatam Castle second-home estate.',
      type: 'Project',
      x: 33,
      y: 55,
      projectId: 'oyster-city',
      officeId: 'indore-office'
    },
    {
      id: 'dhanbad-mall',
      name: 'Prabhatam Grand Mall',
      city: 'Dhanbad',
      state: 'Jharkhand',
      category: '2.71-Acre Retail Destination',
      description: '3.86 lakh sq. ft. retail, 1 lakh sq. ft. boutique hotel, 15,400+ sq. ft. corporate office, and multiplex.',
      type: 'Regional Hub',
      x: 68,
      y: 47,
      projectId: 'prabhatam-grand-mall',
      officeId: 'dhanbad-mall'
    },
    {
      id: 'ranchi-branch',
      name: 'Ranchi Liaison Office',
      city: 'Ranchi',
      state: 'Jharkhand',
      category: 'Regional Office',
      description: 'Regional corporate presence at Harmu Bypass Road coordinating Eastern corridor operations.',
      type: 'Regional Hub',
      x: 65,
      y: 52,
      officeId: 'ranchi-office'
    }
  ];

  const activeMarker = mapMarkers.find(m => m.id === selectedMarkerId) || mapMarkers[0];

  const handleAction = () => {
    if (activeMarker.projectId) {
      const proj = PROJECTS_DATA.find(p => p.id === activeMarker.projectId);
      if (proj) {
        onSelectProject(proj);
      }
    } else if (activeMarker.officeId) {
      onNavigateToOffice(activeMarker.officeId);
    }
  };

  return (
    <section id="map" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-4 h-4 text-amber-500" />
            <span>Pan-India Strategic Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            National Presence & Project Locations
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-sans">
            Interactive map displaying verified corporate hubs, commercial developments, infrastructure corridors, and township assets across India.
          </p>
        </div>

        {/* Interactive Map & Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-sm p-6 sm:p-8 lg:p-10">
          
          {/* Stylized SVG Map of India Container */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] bg-slate-950/80 rounded-sm border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 subtle-grid-bg opacity-40"></div>
            
            {/* Ambient Map Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Stylized India Geography Vector Outline */}
            <svg 
              viewBox="0 0 400 450" 
              className="w-full h-full max-h-[480px] object-contain text-slate-800"
              aria-label="Map of India showing project locations"
            >
              {/* Simplified Geometric Outline of India */}
              <path
                d="M 140 30 L 175 20 L 205 35 L 210 65 L 180 85 L 215 110 L 280 125 L 340 120 L 355 140 L 310 160 L 285 155 L 270 180 L 280 215 L 255 240 L 230 280 L 210 340 L 190 395 L 180 395 L 155 310 L 125 240 L 105 190 L 115 140 L 100 115 L 125 75 Z"
                fill="currentColor"
                stroke="#334155"
                strokeWidth="1.5"
                className="transition-colors duration-300 hover:text-slate-800/80"
              />

              {/* Connecting Geographic Lines between key operational hubs */}
              <line x1="140" y1="126" x2="156" y2="234" stroke="#d97706" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              <line x1="140" y1="126" x2="272" y2="211" stroke="#d97706" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
              <line x1="156" y1="234" x2="272" y2="211" stroke="#d97706" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
            </svg>

            {/* Overlay Interactive Location Markers */}
            <div className="absolute inset-0">
              {mapMarkers.map((marker) => {
                const isSelected = marker.id === selectedMarkerId;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarkerId(marker.id)}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                    aria-label={`View ${marker.city}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulse effect on selected */}
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-amber-400/30 animate-ping"></span>
                      )}
                      
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 scale-125 ring-2 ring-white'
                          : 'bg-slate-900 border border-amber-500/60 text-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:scale-110'
                      }`}>
                        <MapPin className="w-3.5 h-3.5 fill-current" />
                      </div>

                      {/* City Pill Tag */}
                      <span className={`absolute left-8 whitespace-nowrap px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase transition-all duration-200 pointer-events-none ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 shadow-md scale-100 opacity-100'
                          : 'bg-slate-950/90 text-slate-300 border border-slate-800 opacity-80 group-hover:opacity-100'
                      }`}>
                        {marker.city}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 rounded px-3 py-1.5 text-[10px] text-slate-400 flex items-center space-x-3">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                <span>Operating Locations</span>
              </span>
              <span className="text-slate-600">|</span>
              <span>Click pin to inspect</span>
            </div>

          </div>

          {/* Location Inspection Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950 border border-slate-800 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {activeMarker.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial mt-2">
                    {activeMarker.city}, {activeMarker.state}
                  </h3>
                </div>
                <div className="p-3 bg-slate-900 rounded-full border border-slate-800 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Asset / Operation</span>
                  <p className="text-sm font-bold text-white mt-0.5">{activeMarker.name}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Sector Focus</span>
                  <p className="text-xs text-amber-400 font-medium mt-0.5">{activeMarker.category}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Factual Details</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                    {activeMarker.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={handleAction}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow flex items-center justify-center space-x-2"
                >
                  <span>{activeMarker.projectId ? 'Explore Project Specifications' : 'View Office Address & Details'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Location Pills */}
            <div className="flex flex-wrap gap-2">
              {mapMarkers.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMarkerId(m.id)}
                  className={`px-2.5 py-1 text-[11px] rounded uppercase font-semibold tracking-wider transition-colors ${
                    selectedMarkerId === m.id
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {m.city}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
