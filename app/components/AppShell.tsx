'use client';

import { useState } from 'react';
import { Bell, Settings2, Trophy, Users, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [activeTab, setActiveTab] = useState('scores');
  const { theme, setTheme } = useTheme();

  const tabs = [
    { id: 'scores', label: 'Scores', icon: Trophy },
    { id: 'following', label: 'Following', icon: Users },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'highlights', label: 'Highlights', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <header className="glass-card border-b border-accent border-opacity-30 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center glow-accent">
              <Trophy className="w-5 h-5 text-bg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-glow">ScoreStream</h1>
              <p className="text-xs text-text-secondary uppercase tracking-wider">Live Sports Hub</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value as any)}
              className="bg-surface border border-accent border-opacity-30 text-fg px-2 py-1 text-xs rounded-sm"
            >
              <option value="default">Cyber</option>
              <option value="celo">Celo</option>
              <option value="solana">Solana</option>
              <option value="base">Base</option>
              <option value="coinbase">Coinbase</option>
            </select>
            <button className="p-2 hover:bg-surface rounded-sm transition-colors duration-200">
              <Settings2 className="w-5 h-5 text-text-secondary hover:text-accent" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-accent border-opacity-30 px-4 py-2">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-sm transition-all duration-200 ${
                  isActive 
                    ? 'text-accent glow-accent bg-surface bg-opacity-50' 
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium uppercase tracking-wider">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
