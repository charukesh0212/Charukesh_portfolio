import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-12 sm:py-16 bg-background border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Academic Track
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Education
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* Clean Timeline */}
        <div className="max-w-3xl space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border transition-all duration-150 ${
                item.current
                  ? 'bg-surface border-blue-200/90 shadow-card'
                  : 'bg-surface border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2.5">
                  <div className={`p-1.5 rounded-md ${item.current ? 'bg-primary-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Score & Period */}
                <div className="flex sm:flex-col items-start sm:items-end gap-1.5 sm:gap-1 text-xs">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-800 border border-blue-200 text-xs">
                    {item.grade}
                  </span>
                  <span className="text-slate-500 font-medium text-[11px]">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.description && (
                <p className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
