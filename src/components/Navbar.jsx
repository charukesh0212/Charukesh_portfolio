import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-surface-muted py-2.5 shadow-xs'
          : 'bg-background/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-2.5 focus:outline-none">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-900"></span>
          <div>
            <span className="font-extrabold tracking-wider text-slate-900 text-sm sm:text-base uppercase block leading-none">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-tight">
              EEE Student • SCSVMV
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? 'text-primary-900 bg-slate-100 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Charukesh_T_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-900 hover:text-white bg-transparent hover:bg-primary-900 border border-primary-900/60 hover:border-primary-900 rounded transition-all duration-150"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="lg:hidden p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-surface-muted shadow-md px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-primary-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Charukesh_T_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white bg-primary-900 rounded hover:bg-primary-950 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
