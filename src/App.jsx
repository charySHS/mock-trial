import React, { useState, useEffect, useRef } from 'react';
import { Gavel, Landmark, Menu, X, Calendar, Database, BookOpen, CreditCard, Sparkles, Home } from 'lucide-react';
import { gsap } from 'gsap';
import Dashboard from './components/Dashboard';
import CaseVault from './components/CaseVault';
import RoleGuides from './components/RoleGuides';
import MemberCard from './components/MemberCard';
import Assistant from './components/Assistant';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const contentRef = useRef(null);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, component: Dashboard },
    { id: 'vault', label: 'Case Vault', icon: Database, component: CaseVault },
    { id: 'guides', label: 'Role Guides', icon: BookOpen, component: RoleGuides },
    { id: 'card', label: 'Member Badge', icon: CreditCard, component: MemberCard },
    { id: 'assistant', label: 'AI Assistant', icon: Sparkles, component: Assistant }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  // GSAP Smooth Page Transitions
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 15, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [activeTab]);

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || Dashboard;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-navy-darkest text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* 1. TOP HEADER GLASS-NAVBAR */}
      <header className="sticky top-0 z-50 bg-navy-darkest/85 backdrop-blur-md border-b border-gold-brass/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange('dashboard')}>
            <div className="bg-gradient-to-br from-gold-brass to-gold-primary p-2 rounded-lg text-navy-darkest shadow-md">
              <Gavel className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-extrabold text-sm sm:text-base tracking-widest text-gold-brass block leading-tight">
                SERVITE MOCK TRIAL
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                CRF-OC COMPETITION DIVISION
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`nav-link flex items-center gap-2 font-serif text-[11px] tracking-wider px-4 py-2 bg-transparent border-0 cursor-pointer ${activeTab === tab.id ? 'active text-gold-primary font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Domain Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[10px] font-mono text-gold-brass/60 border border-gold-primary/20 px-2.5 py-1 rounded bg-navy-dark/40">
              servite-mock-trial.org
            </span>
          </div>

          {/* Mobile Hamburguer menu trigger */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-200 bg-transparent border-0 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-darkest/95 border-b border-slate-900 absolute top-20 left-0 w-full p-4 space-y-2 fade-in">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full text-left flex items-center gap-3 font-serif text-xs tracking-wider p-3 rounded-lg border transition-all ${activeTab === tab.id ? 'bg-gold-brass text-navy-darkest font-bold border-gold-primary' : 'bg-navy-dark/30 border-slate-900 text-slate-300'}`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
            <div className="pt-2 text-center">
              <span className="inline-block text-[10px] font-mono text-gold-brass/50 border border-gold-primary/10 px-2 py-0.5 rounded">
                servite-mock-trial.org
              </span>
            </div>
          </div>
        )}
      </header>

      {/* 2. MAIN APP CONTENT CONTAINER WITH GSAP WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        <div ref={contentRef}>
          <ActiveComponent setActiveTab={handleTabChange} />
        </div>
      </main>

      {/* 3. LEGAL CLASSIC FOOTER */}
      <footer className="bg-[#03050c] border-t border-slate-950 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-gold-brass" />
            <span>© 2026 Servite High School Mock Trial. Credo ut Intelligam. All Rights Reserved.</span>
          </div>

          <div className="flex gap-4">
            <a href="https://www.crfoc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-brass transition-colors">
              CRF Orange County Official Site
            </a>
            <span>•</span>
            <span className="text-[10px] font-mono text-gold-brass/40">
              servite-mock-trial.org
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
