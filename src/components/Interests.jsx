import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Zap, Cpu, Wifi, Activity, Navigation, Sliders } from 'lucide-react';

const iconMap = {
  Zap,
  Cpu,
  Wifi,
  Activity,
  Navigation,
  Sliders,
};

export default function Interests() {
  const { engineeringInterests } = portfolioData;

  return (
    <section id="interests" className="py-20 bg-surface border-y border-surface-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-700 uppercase">
            Curiosity & Focus
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            Areas I'm Interested In
          </h2>
          <div className="w-12 h-0.5 bg-primary-700 mt-3 rounded-full"></div>
          <p className="mt-3 text-sm text-charcoal-600 max-w-xl">
            Key disciplines within electrical, embedded, and autonomous systems where I focus my self-study, lab projects, and future career aspirations.
          </p>
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringInterests.map((interest, idx) => {
            const Icon = iconMap[interest.iconName] || Zap;
            return (
              <div
                key={idx}
                className="p-6 bg-background rounded-xl border border-surface-muted hover:border-primary-300 shadow-subtle hover:shadow-card transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Line Icon */}
                  <div className="w-10 h-10 rounded-lg bg-surface border border-surface-muted flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors duration-200 mb-4">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-primary-800 transition-colors">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-muted/60 flex items-center justify-between text-[11px] font-mono text-charcoal-500">
                  <span>Interest #{idx + 1}</span>
                  <span className="text-primary-700 group-hover:translate-x-0.5 transition-transform">Focus Area →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
