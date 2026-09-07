import React, { useState } from 'react';
import { 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Award, 
  ShieldCheck,
  Building,
  FileText
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    verticalInterest: 'Infrastructure & Engineering',
    experienceYears: '5-10 Years',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const verticals = [
    'Infrastructure & Engineering',
    'Real Estate & Project Execution',
    'Civil Construction & Site Planning',
    'Aviation Operations & Flight Management',
    'Media, Digital OOH & Client Relations',
    'Corporate Finance, Legal & Compliance',
    'Agritech & Sustainable Operations'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="careers" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span>Talent & Enterprise Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-editorial">
            Careers at Prabhatam
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Collaborate on nation-building infrastructure, signature urban landmarks, licensed aviation mobility, and next-generation media networks.
          </p>
        </div>

        {/* 2-Column Careers Grid: Culture & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Values & Corporate Culture */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white font-editorial">
              Enterprise Craftsmanship Across 50 Years
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Prabhatam Infra Ventures fosters an engineering and leadership ethos centered on execution precision, transparent compliance, and multi-disciplinary learning. Our teams lead high-consequence projects ranging from mountain highway engineering to high-density commercial assets.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-sm bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Institutional Governance</h4>
                  <p className="text-xs text-slate-400 mt-1">Disciplined adherence to regulatory, structural, and corporate ethics in all contract executions.</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Building className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Capital Project Exposure</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct involvement in landmark EPC developments, retail mall ecosystems, and integrated townships.</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Users className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Cross-Vertical Mobility</h4>
                  <p className="text-xs text-slate-400 mt-1">Opportunities to transfer domain mastery across Infrastructure, Real Estate, Aviation, and Agritech.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-white block mb-1">Corporate HR Note</span>
              <span>We invite speculative profiles and expressions of interest from seasoned engineering, planning, project finance, and operational leaders across all operating locations.</span>
            </div>
          </div>

          {/* Direct Resume Application Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-8 shadow-2xl">
              
              <div className="border-b border-slate-800 pb-4 mb-6">
                <h4 className="text-lg font-bold text-white font-editorial">
                  Submit Candidate Dossier
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Transmit your credentials directly to Prabhatam Human Capital management.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-editorial">
                    Application Successfully Transmitted
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for submitting your dossier for <span className="text-amber-400 font-semibold">{formData.verticalInterest}</span>. Our Talent Acquisition Secretariat will review your credentials against active and upcoming project requirements.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        verticalInterest: 'Infrastructure & Engineering',
                        experienceYears: '5-10 Years',
                        message: '',
                        fileName: ''
                      });
                    }}
                    className="mt-4 px-6 py-2 bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-slate-700"
                  >
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option>1-3 Years (Associate)</option>
                        <option>3-5 Years (Specialist)</option>
                        <option>5-10 Years (Senior Manager)</option>
                        <option>10-15 Years (Lead / Director)</option>
                        <option>15+ Years (Executive / VP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Sector / Vertical Focus
                    </label>
                    <select
                      value={formData.verticalInterest}
                      onChange={(e) => setFormData({ ...formData, verticalInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      {verticals.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* Resume Upload Box (Drag and Drop + Manual Click) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Curriculum Vitae / Portfolio (PDF or DOC)
                    </label>
                    <div 
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                          setFormData({ ...formData, fileName: e.dataTransfer.files[0].name });
                        }
                      }}
                      className={`border-2 border-dashed rounded-sm p-5 text-center cursor-pointer transition-colors ${
                        isDragging 
                          ? 'border-amber-500 bg-amber-500/5' 
                          : formData.fileName 
                            ? 'border-emerald-500/60 bg-emerald-950/20' 
                            : 'border-slate-800 hover:border-slate-700 bg-slate-950'
                      }`}
                      onClick={() => document.getElementById('resume-file-input')?.click()}
                    >
                      <input
                        id="resume-file-input"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      
                      {formData.fileName ? (
                        <div className="flex items-center justify-center space-x-2 text-emerald-400">
                          <FileText className="w-5 h-5" />
                          <span className="text-xs font-semibold truncate max-w-xs">{formData.fileName}</span>
                          <span className="text-[10px] uppercase font-bold text-slate-400">(Selected)</span>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                          <p className="text-xs text-slate-300 font-medium">
                            Drag & drop your CV here, or <span className="text-amber-400 underline">browse file</span>
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Maximum file size: 15 MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Professional Statement / Cover Letter
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Summarize your engineering background, project execution achievements, and career alignment..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-sm text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Transmit Career Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
