import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Target, CheckCircle2, Globe2, Sparkles } from 'lucide-react';

export default function About() {
  const { personal, softSkills, languages } = portfolioData;

  return (
    <section id="about" className="py-12 sm:py-16 bg-surface border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-primary-900 uppercase">
            Profile & Objectives
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            About Me
          </h2>
          <div className="w-10 h-0.5 bg-primary-900 mt-2 rounded-full"></div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Objective & Background Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              I am an undergraduate engineering student at <strong className="text-slate-900">Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV University)</strong>, Kanchipuram, pursuing my Bachelor of Engineering in Electrical & Electronics Engineering with a current standing of <strong className="text-primary-900">CGPA 8.08</strong>.
            </p>
            <p>
              My coursework and technical curiosity revolve around electrical circuits, machines, microcontroller interfacing with Arduino, and UAV flight systems. Having completed initial industrial shop-floor training, I am eager to apply foundational engineering concepts to practical real-world problems.
            </p>
            <p>
              Currently seeking an <strong className="text-slate-900">internship opportunity</strong> where I can gain hands-on technical mentorship, contribute to ongoing engineering workflows, and develop practical industrial competence.
            </p>

            {/* Languages Spoken */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200"
                  >
                    <Globe2 className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                    <strong>{lang.language}</strong>&nbsp;({lang.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Soft Skills & Professional Attributes (5 cols) */}
          <div className="lg:col-span-5 bg-background rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-slate-200">
              <Sparkles className="w-4 h-4 text-primary-900" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Core Attributes & Soft Skills
              </h3>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Key interpersonal and professional qualities demonstrated through team projects and manufacturing floor exposure:
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-surface border border-slate-200/90 flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>Status: Available for Internships</span>
              <span className="text-emerald-700 font-semibold">• Ready to Learn</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
