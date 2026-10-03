import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, ArrowUp } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h4 className="font-extrabold text-slate-900 tracking-wider text-sm uppercase">
              {personal.name}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {personal.title} • {personal.location}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2 rounded-full bg-surface border border-slate-200 text-slate-700 hover:text-primary-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-surface border border-slate-200 text-slate-700 hover:text-primary-900 transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2 rounded-full bg-surface border border-slate-200 text-slate-700 hover:text-primary-900 transition-colors ml-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="font-mono">Electrical & Electronics Engineering Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
