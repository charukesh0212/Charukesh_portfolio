import React from 'react';
import { ArrowRight, FileDown, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;

  const handleImageProtection = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-28 md:pb-16 tech-dot-grid border-b border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Core Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-slate-200 text-slate-800 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personal.seeking}</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="text-primary-900">{personal.name}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-1.5 text-lg sm:text-xl font-semibold text-slate-700">
              {personal.title}
            </p>

            {/* Professional Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {personal.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                <Award className="w-3.5 h-3.5 mr-1.5 text-blue-700" />
                CGPA: 8.08 (till date)
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                SCSVMV University, Kanchipuram
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
                {personal.location}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-primary-900 hover:bg-primary-950 rounded-md transition-all shadow-xs"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Charukesh_T_Resume.pdf"
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-primary-900 bg-surface hover:bg-slate-50 border border-slate-300 rounded-md transition-all shadow-xs"
              >
                <FileDown className="w-4 h-4 text-primary-900" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Profile Image Container with Clean Ring */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Clean outer accent ring */}
              <div className="absolute inset-0 rounded-full border border-slate-300/80 pointer-events-none"></div>
              <div className="absolute inset-2 rounded-full border border-dashed border-primary-900/30 pointer-events-none"></div>

              {/* Profile Image Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2 bg-surface shadow-card border border-slate-200 group">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src={personal.profileImage}
                    alt="Charukesh T - Electrical & Electronics Engineering Student"
                    className="w-full h-full object-cover object-top protected-image transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                    onContextMenu={handleImageProtection}
                    onDragStart={handleImageProtection}
                  />

                  {/* Anti-copy shield overlay */}
                  <div
                    className="absolute inset-0 z-20 cursor-default select-none bg-transparent"
                    onContextMenu={handleImageProtection}
                    onDragStart={handleImageProtection}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              {/* Clean Bottom Label */}
              <div className="absolute -bottom-2 bg-surface px-3 py-1 rounded-full border border-slate-200 shadow-xs text-[11px] font-semibold text-slate-700 flex items-center space-x-1.5 z-30">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>B.E. EEE • 2024–2028</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
