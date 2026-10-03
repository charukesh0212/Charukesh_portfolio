import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, FileDown, ArrowUpRight, Copy, Check } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-surface border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Direct Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Let's Connect
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
          <p className="mt-3 text-sm text-slate-600 max-w-xl">
            Currently looking for internship opportunities where I can learn, contribute, and develop practical engineering skills.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Email */}
          <div className="bg-background rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-md bg-surface text-primary-900 border border-slate-200">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="text-[11px] text-slate-500 hover:text-slate-900 inline-flex items-center space-x-1"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email</span>
              <a
                href={`mailto:${personal.email}`}
                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-primary-900 truncate mt-0.5"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-background rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-md bg-surface text-primary-900 border border-slate-200">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="text-[11px] text-slate-500 hover:text-slate-900 inline-flex items-center space-x-1"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone</span>
              <a
                href={`tel:${personal.phone}`}
                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-primary-900 mt-0.5"
              >
                +91 {personal.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-background rounded-xl p-4 border border-slate-200 shadow-xs">
            <div className="p-1.5 rounded-md bg-surface text-primary-900 border border-slate-200 w-fit mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Location</span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
              {personal.location}
            </p>
          </div>

          {/* LinkedIn */}
          <div className="bg-background rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-md bg-surface text-primary-900 border border-slate-200">
                  <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">LinkedIn</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-primary-900 truncate mt-0.5"
              >
                in/charukesh-t-abb363324
              </a>
            </div>
          </div>

        </div>

        {/* Action Buttons Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${personal.email}?subject=Internship%20Opportunity%20-%20Charukesh%20T`}
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-primary-900 hover:bg-primary-950 rounded-md transition-all shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-background hover:bg-slate-100 border border-slate-300 rounded-md transition-all"
          >
            <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={personal.resumeUrl}
            download="Charukesh_T_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-all"
          >
            <FileDown className="w-4 h-4 text-primary-900" />
            <span>Download Resume</span>
          </a>
        </div>

      </div>
    </section>
  );
}
