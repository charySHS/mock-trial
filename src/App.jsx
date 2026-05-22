import React, { useState } from 'react';
import { Gavel, Home, Database, BookOpen, CreditCard, Sparkles, Menu, X } from 'lucide-react';
import Dashboard from './components/Dashboard';
import CaseVault from './components/CaseVault';
import RoleGuides from './components/RoleGuides';
import MemberCard from './components/MemberCard';
import Assistant from './components/Assistant';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'vault', label: 'Case Vault', icon: Database },
  { id: 'guides', label: 'Role Guides', icon: BookOpen },
  { id: 'card', label: 'Member Badge', icon: CreditCard },
  { id: 'assistant', label: 'AI Assistant', icon: Sparkles },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || Dashboard;
  // Resolve component from tab id since we can't store components in the array cleanly
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard setActiveTab={handleTabChange} />;
      case 'vault': return <CaseVault />;
      case 'guides': return <RoleGuides />;
      case 'card': return <MemberCard />;
      case 'assistant': return <Assistant />;
      default: return <Dashboard setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface-50">
      {/* ─── Desktop Sidebar ─── */}
      <aside className="sidebar hidden lg:flex">
        {/* Logo */}
        <div className="px-5 pt-6 pb-4 border-b border-surface-200">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange('dashboard')}>
            <div className="bg-navy-800 p-2 rounded-lg text-gold-400 shadow-sm">
              <Gavel className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm text-navy-900 tracking-wide block leading-tight">
                SERVITE
              </span>
              <span className="text-[10px] text-text-muted uppercase tracking-widest font-semibold">
                Mock Trial
              </span>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full ${isActive ? 'nav-item-active' : 'nav-item-default'}`}
              >
                <Icon className="w-[18px] h-[18px]" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-4 border-t border-surface-200">
          <span className="text-[10px] font-mono text-text-muted block text-center">
            servite-mock-trial.org
          </span>
        </div>
      </aside>

      {/* ─── Mobile Top Bar ─── */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleTabChange('dashboard')}>
            <div className="bg-navy-800 p-1.5 rounded-md text-gold-400">
              <Gavel className="w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-sm text-navy-900 tracking-wide">SERVITE</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary bg-transparent border-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="bg-white border-b border-surface-200 px-3 pb-3 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full ${isActive ? 'nav-item-active' : 'nav-item-default'}`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* ─── Main Content ─── */}
      <main className="lg:ml-[240px] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="border-t border-surface-200 mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-muted">
            <span>© 2026 Servite High School Mock Trial — CRF-OC Division</span>
            <a
              href="https://www.crfoc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-800 transition-colors"
            >
              CRF Orange County ↗
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
