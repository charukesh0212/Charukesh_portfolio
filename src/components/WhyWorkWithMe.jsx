import React from 'react';
import { portfolioData } from '../data/portfolio';
import { BookOpen, Factory, Lightbulb, Users } from 'lucide-react';

const icons = [BookOpen, Factory, Lightbulb, Users];

export default function WhyWorkWithMe() {
  const { whatIBring } = portfolioData;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary-700 uppercase">
            Value Proposition
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
            What I Bring
          </h2>
          <div className="w-12 h-0.5 bg-primary-700 mt-3 rounded-full"></div>
          <p className="mt-3 text-sm text-charcoal-600 max-w-xl">
            A grounded engineering perspective centered on solid fundamentals, industrial discipline, and enthusiastic curiosity.
          </p>
        </div>

        {/* 4 Realistic Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIBring.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 border border-surface-muted shadow-card hover:shadow-card-hover hover:border-primary-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-charcoal-700 mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-charcoal-500 leading-relaxed border-t border-surface-muted/60 pt-3">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-surface-muted/50 flex items-center text-[11px] font-mono text-charcoal-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2"></span>
                  <span>Intern Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
