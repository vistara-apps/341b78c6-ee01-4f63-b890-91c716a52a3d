'use client';

import { TrendingUp, Target, Award } from 'lucide-react';
import { Player } from '@/lib/types';

interface PlayerCardProps {
  player: Player;
  variant?: 'statsSummary';
  showStats?: boolean;
}

export function PlayerCard({ 
  player, 
  variant = 'statsSummary',
  showStats = true 
}: PlayerCardProps) {
  const getStatIcon = (statKey: string) => {
    switch (statKey) {
      case 'points':
      case 'goals':
        return Target;
      case 'assists':
        return TrendingUp;
      case 'touchdowns':
        return Award;
      default:
        return TrendingUp;
    }
  };

  const formatStatLabel = (key: string): string => {
    const labels: { [key: string]: string } = {
      points: 'PTS',
      assists: 'AST',
      rebounds: 'REB',
      goals: 'GOALS',
      saves: 'SAVES',
      yards: 'YDS',
      touchdowns: 'TD'
    };
    return labels[key] || key.toUpperCase();
  };

  const mainStats = Object.entries(player.stats)
    .filter(([_, value]) => value !== undefined && value > 0)
    .slice(0, 3);

  return (
    <div className="score-card group hover:scale-105 transition-all duration-200">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center text-bg font-bold text-lg glow-accent">
          {player.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-text-primary text-glow">{player.name}</h3>
          <p className="text-sm text-text-secondary uppercase tracking-wider">
            {player.position} • {player.team.toUpperCase()}
          </p>
        </div>
      </div>

      {showStats && mainStats.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-accent uppercase tracking-wider">
            Performance
          </h4>
          
          <div className="grid grid-cols-3 gap-3">
            {mainStats.map(([key, value]) => {
              const Icon = getStatIcon(key);
              
              return (
                <div key={key} className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-xl font-bold text-text-primary text-glow">
                    {value}
                  </div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    {formatStatLabel(key)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-accent border-opacity-20">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary uppercase tracking-wider">
            Live Stats
          </span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
        </div>
      </div>
    </div>
  );
}
