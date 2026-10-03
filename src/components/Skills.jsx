import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Zap, Cpu, Terminal, Wrench } from 'lucide-react';

const icons = {
  coreEEE: Zap,
  embeddedIoT: Cpu,
  programming: Terminal,
  softwareTools: Wrench,
};

export default function Skills() {
  const { technicalSkills } = portfolioData;

  return (
    <section id="skills" className="py-12 sm:py-16 bg-background border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Technical Skills
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(technicalSkills).map(([key, category]) => {
            const Icon = icons[key] || Zap;
            return (
              <div
                key={key}
                className="bg-surface rounded-xl p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
                    <div className="p-1.5 rounded-md bg-blue-50 text-primary-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between items-center">
                  <span>{category.items.length} items</span>
                  <span className="font-semibold text-primary-900">Verified Skill</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
