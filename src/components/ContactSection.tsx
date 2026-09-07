import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Building, 
  Building2, 
  ArrowRight,
  Clock,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/prabhatamData';

interface ContactSectionProps {
  initialTopic?: string;
  initialOfficeId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialTopic = 'Infrastructure',
  initialOfficeId = 'delhi-hq'
}) => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>(initialOfficeId);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    category: initialTopic,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Infrastructure',
    'Real Estate & Leasing',
    'Aviation & Charters',
    'Media & Outdoor OOH',
    'Vendor / Contractor Prequalification',
    'Corporate Communications',
    'General Enterprise Inquiry'
  ];

  const activeOffice = OFFICE_LOCATIONS.find(o => o.id === selectedOfficeId) || OFFICE_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-4 h-4 text-amber-500" />
            <span>Corporate Liaison & Secretariat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Contact & Office Directory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Connect with our headquarters in New Delhi or regional project offices across Central and Eastern India for enterprise partnerships, leasing, and civil contracts.
          </p>
        </div>

        {/* Corporate Office Directory & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Directory Tabs & Active Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white font-editorial">
                National Office Network
              </h3>
              <span className="text-xs font-mono text-amber-400">
                {OFFICE_LOCATIONS.length} Official Locations
              </span>
            </div>

            {/* Office Selection Pills */}
            <div className="flex flex-wrap gap-2">
              {OFFICE_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedOfficeId(loc.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedOfficeId === loc.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {loc.city} ({loc.type})
                </button>
              ))}
            </div>

            {/* Active Office Detailed Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-slate-950 border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {activeOffice.type}
                  </span>
                  <h4 className="text-xl font-bold text-white font-editorial mt-2">
                    {activeOffice.name}
                  </h4>
                  <p className="text-xs text-slate-400">{activeOffice.city}, {activeOffice.state}</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-full border border-slate-800 text-amber-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Physical Address</span>
                    <p className="leading-relaxed text-white font-medium">{activeOffice.addressLines.join(', ')}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Pin: {activeOffice.pinCode} • India</p>
                  </div>
                </div>

                {activeOffice.phone && (
                  <div className="flex items-center space-x-3 text-slate-300 pt-2 border-t border-slate-900">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Telephone</span>
                      <span className="text-white font-mono">{activeOffice.phone}</span>
                    </div>
                  </div>
                )}

                {activeOffice.email && (
                  <div className="flex items-center space-x-3 text-slate-300 pt-2 border-t border-slate-900">
                    <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">Official Inquiries</span>
                      <span className="text-amber-400 font-mono">{activeOffice.email}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Direct Factual Address Verified from Official Website</span>
                <span className="text-amber-400/80 font-mono">Prabhatam Group</span>
              </div>
            </div>

            {/* Quick Operating Notice */}
            <div className="p-4 rounded-sm bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-start space-x-3">
              <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Corporate Business Hours</span>
                <span>Monday through Saturday: 09:30 AM to 06:30 PM IST. Closed on statutory public holidays.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 border border-slate-800 rounded-sm p-6 sm:p-8 shadow-2xl">
              
              <div className="border-b border-slate-800 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white font-editorial">
                  Submit Institutional Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Transmissions are routed directly to the appropriate corporate vertical secretariat.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-editorial">
                    Inquiry Successfully Logged
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your correspondence regarding <span className="text-amber-400 font-semibold">{formData.category}</span> has been routed to our corporate liaison desk. A representative will contact you within 24–48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        category: 'Infrastructure',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2 bg-slate-900 text-amber-400 border border-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-slate-850"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Singhania"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@enterprise.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98110 XXXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Infrastructure Consortium"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Brief / Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your requirements, project tender scope, commercial space requirements, or partnership proposal..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Transmit Corporate Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2 text-center text-[10px] text-slate-500 flex items-center justify-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>Protected by corporate confidentiality protocols.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
