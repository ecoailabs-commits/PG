import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail,
  ChevronDown,
  Layers,
  MapPin
} from 'lucide-react';
import { COMPANY_BRAND } from '../data/prabhatamData';

interface HeaderProps {
  currentView: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiries?: () => void;
  inquiryCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  onNavigate,
  onOpenInquiries,
  inquiryCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesDropdown, setCapabilitiesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Capabilities', target: 'capabilities', hasSubmenu: true },
    { label: 'Infrastructure', target: 'infrastructure' },
    { label: 'Projects', target: 'projects' },
    { label: 'Sustainability', target: 'sustainability' },
    { label: 'Leadership', target: 'leadership' },
    { label: 'CSR', target: 'csr' },
    { label: 'Media', target: 'media' },
    { label: 'Careers', target: 'careers' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    setCapabilitiesDropdown(false);
    onNavigate(target);
  };

  return (
    <>
      {/* Top Corporate Bar */}
      <div className="hidden lg:block bg-slate-950/90 border-b border-slate-800/60 text-xs text-slate-400 py-1.5 px-6 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse"></span>
              <span className="tracking-wide">Prabhatam Group Heritage: 50 Years of Nation Building</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center space-x-1 hover:text-slate-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500/80" />
              <span>HQ: New Delhi, India</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_BRAND.corporatePhone}`} 
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500/80" />
              <span>{COMPANY_BRAND.corporatePhone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_BRAND.corporateEmail}`} 
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500/80" />
              <span>{COMPANY_BRAND.corporateEmail}</span>
            </a>
            {inquiryCount > 0 && onOpenInquiries && (
              <button
                onClick={onOpenInquiries}
                className="bg-amber-950/50 hover:bg-amber-900/60 text-amber-300 border border-amber-800/40 px-2 py-0.5 rounded text-[11px] font-medium tracking-wide flex items-center space-x-1 transition-all"
              >
                <span>Inquiries</span>
                <span className="bg-amber-500 text-slate-950 rounded-full w-4 h-4 inline-flex items-center justify-center text-[10px] font-bold">
                  {inquiryCount}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3.5' 
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Architectural Brand Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
            aria-label="Prabhatam Infra Ventures Home"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-500 via-amber-600 to-slate-900 p-0.5 shadow-md group-hover:shadow-amber-500/20 transition-all">
              <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                <span className="font-heading font-extrabold text-amber-400 text-xl tracking-tighter">
                  P
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-[0.14em] text-white leading-none group-hover:text-amber-300 transition-colors">
                PRABHATAM
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.24em] text-amber-500/90 uppercase mt-1">
                INFRA VENTURES
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.target;
              
              if (link.hasSubmenu) {
                return (
                  <div 
                    key={link.target}
                    className="relative group"
                    onMouseEnter={() => setCapabilitiesDropdown(true)}
                    onMouseLeave={() => setCapabilitiesDropdown(false)}
                  >
                    <button
                      onClick={() => handleLinkClick(link.target)}
                      className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-sm flex items-center space-x-1 ${
                        isActive 
                          ? 'text-amber-400 font-semibold bg-slate-900/60' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Submenu */}
                    {capabilitiesDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-md shadow-2xl p-2.5 space-y-1">
                        <button
                          onClick={() => handleLinkClick('infrastructure')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <div>
                            <p className="font-medium text-white">01 — Infrastructure</p>
                            <p className="text-[10px] text-slate-400">EPC, Roads & Mountain Signage</p>
                          </div>
                        </button>
                        <button
                          onClick={() => handleLinkClick('projects')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <div>
                            <p className="font-medium text-white">02 — Real Estate</p>
                            <p className="text-[10px] text-slate-400">Townships, Malls & Luxury Living</p>
                          </div>
                        </button>
                        <button
                          onClick={() => handleLinkClick('media')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          <div>
                            <p className="font-medium text-white">03 — Media & DAWN</p>
                            <p className="text-[10px] text-slate-400">Outdoor LED & Broadcast Networks</p>
                          </div>
                        </button>
                        <button
                          onClick={() => handleLinkClick('aviation')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          <div>
                            <p className="font-medium text-white">04 — Aviation</p>
                            <p className="text-[10px] text-slate-400">NSOP Charters & Fly Divine</p>
                          </div>
                        </button>
                        <button
                          onClick={() => handleLinkClick('sustainability')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          <div>
                            <p className="font-medium text-white">05 — Agrofresh & Green Tech</p>
                            <p className="text-[10px] text-slate-400">AI/ML Agricultural Predictability</p>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`px-2.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-sm ${
                    isActive 
                      ? 'text-amber-400 font-semibold bg-slate-900/60' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-slate-950 uppercase transition-all duration-200 bg-amber-500 hover:bg-amber-400 rounded-sm shadow-md hover:shadow-amber-500/20 active:translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="sm:hidden text-xs bg-amber-500 text-slate-950 px-2.5 py-1.5 rounded-sm font-semibold uppercase tracking-wider"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-screen Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <div className="border-b border-slate-800 pb-4 mb-4">
            <p className="text-xs uppercase tracking-widest text-amber-500 font-bold">
              PRABHATAM INFRA VENTURES
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Building Infrastructure. Creating Possibilities.
            </p>
          </div>

          <nav className="flex-1 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`w-full text-left py-2.5 px-3 rounded text-base font-medium transition-colors flex items-center justify-between ${
                  currentView === link.target
                    ? 'text-amber-400 bg-slate-900 font-semibold'
                    : 'text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            ))}
            
            <div className="pt-4 border-t border-slate-800/80 mt-4 space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 px-3 font-semibold">
                Business Verticals
              </p>
              <button
                onClick={() => handleLinkClick('infrastructure')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
              >
                → Infrastructure & Highway Signage
              </button>
              <button
                onClick={() => handleLinkClick('projects')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
              >
                → Real Estate Portfolio & Townships
              </button>
              <button
                onClick={() => handleLinkClick('media')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
              >
                → Media & Outdoor DAWN Networks
              </button>
              <button
                onClick={() => handleLinkClick('aviation')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
              >
                → Aviation, NSOP & Fly Divine
              </button>
            </div>
          </nav>

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="space-y-1 text-xs text-slate-400">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{COMPANY_BRAND.corporatePhone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>{COMPANY_BRAND.corporateEmail}</span>
              </p>
            </div>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm shadow-lg text-center"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      )}
    </>
  );
};
