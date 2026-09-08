import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp, 
  ShieldCheck, 
  Globe, 
  Layers 
} from 'lucide-react';
import { COMPANY_BRAND, OFFICE_LOCATIONS } from '../data/prabhatamData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hqOffice = OFFICE_LOCATIONS.find(o => o.id === 'delhi-hq') || OFFICE_LOCATIONS[0];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Legacy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                P
              </div>
              <span className="text-lg font-bold text-white tracking-wider font-editorial">
                {COMPANY_BRAND.name.toUpperCase()}
              </span>
            </div>

            <p className="text-amber-400 font-editorial text-sm italic">
              "{COMPANY_BRAND.tagline}"
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              Tracing an institutional trajectory spanning more than 20 years of experience. Developing core national highway infrastructure, road engineering corridors, master-planned townships, and landmark commercial destinations across India.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-slate-500">
              <span className="flex items-center space-x-1.5 text-[11px] text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Verified Corporate Archive</span>
              </span>
            </div>
          </div>

          {/* Column 2: Infrastructure & Real Estate (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Infrastructure & Realty
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('infrastructure')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Prabhatam Infrastructure & EPC
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('infrastructure')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Roads, Highways & Safety Networks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Prabhatam Realty & Townships
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Retail Malls & Commercial Plazas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Luxury Condominiums & Villas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Enterprise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  About Enterprise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('infrastructure')} className="hover:text-amber-400 transition-colors">
                  Infrastructure Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-amber-400 transition-colors">
                  Real Estate Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-amber-400 transition-colors">
                  Dispatches & News
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">
                  Office Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Corporate Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="font-semibold text-white">{hqOffice.name}</p>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="leading-relaxed text-slate-400">
                  {hqOffice.addressLines.join(', ')}
                </p>
              </div>
              <div className="flex items-center space-x-2 pt-1 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-mono">{hqOffice.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-mono">{hqOffice.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-[11px] font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Return to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Bar with Legal Disclaimer */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} {COMPANY_BRAND.name}. All rights reserved.</p>
            <p className="text-[10px] text-slate-400 mt-1 max-w-2xl">
              Factual content derived strictly from public records published by Prabhatam Group. All brand identities, logos, project specifications, and architectural documentation are properties of their respective entities.
            </p>
          </div>

          <div className="flex items-center space-x-6 shrink-0 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Framework</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Engagement</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Statutory Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
