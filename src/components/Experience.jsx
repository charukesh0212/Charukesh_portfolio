import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Factory, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-12 sm:py-16 bg-surface border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Industry Exposure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Internship Experience
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
                      {exp.badge}
                    </span>
                    <span className="text-xs text-slate-500">• {exp.description}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-1.5">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary-900 flex items-center space-x-1.5 mt-0.5">
                    <Factory className="w-3.5 h-3.5 text-blue-700" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                {/* Duration & Period */}
                <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-600 font-medium">
                  <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-surface rounded border border-slate-200">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Responsibilities matching resume */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Core Responsibilities & Learnings
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
