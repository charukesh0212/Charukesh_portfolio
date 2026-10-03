import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 sm:py-16 bg-surface border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Practical Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Projects & Explorations
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* 2 Focused Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="mt-3.5 pt-3 border-t border-slate-200/80 space-y-1.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start space-x-2">
                          <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-surface text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
