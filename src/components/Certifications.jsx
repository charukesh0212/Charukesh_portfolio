import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-background border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Credentials & Workshops
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Certifications & Training
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* 3 Clean Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-1.5 rounded-md bg-blue-50 text-primary-900">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {cert.type}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1.5">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-600 mb-2.5 font-medium">
                  {cert.issuer}
                </p>

                <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 font-mono mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.period}</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Completion</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
