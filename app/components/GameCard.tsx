'use client';

import { Clock, Play, CheckCircle } from 'lucide-react';
import { Game } from '@/lib/types';

interface GameCardProps {
  game: Game;
  onClick?: () => void;
}

export function GameCard({ game, onClick }: GameCardProps) {
  const getStatusIcon = () => {
    switch (game.status) {
      case 'live':
        return <Play className="w-4 h-4 text-red-500" />;
      case 'finished':
        return <CheckCircle className="w-4 h-4 text-accent" />;
      default:
        return <Clock className="w-4 h-4 text-text-secondary" />;
    }
  };

  const getStatusText = () => {
    switch (game.status) {
      case 'live':
        return game.currentTime;
      case 'finished':
        return 'Final';
      case 'halftime':
        return 'Halftime';
      default:
        return new Date(game.startTime).toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
    }
  };

  const isLive = game.status === 'live';

  return (
    <div 
      className={`score-card cursor-pointer ${isLive ? 'animate-pulse-glow' : ''}`}
      onClick={onClick}
    >
      {/* Game Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className={`text-sm font-bold uppercase tracking-wider ${
            isLive ? 'text-red-500' : 'text-text-secondary'
          }`}>
            {getStatusText()}
          </span>
        </div>
        
        <span className="text-xs text-text-secondary uppercase tracking-wider">
          {game.sport}
        </span>
      </div>

      {/* Teams and Scores */}
      <div className="space-y-3">
        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">{game.teams.away.logo}</span>
            <div>
              <h4 className="font-bold text-text-primary">{game.teams.away.name}</h4>
              <p className="text-xs text-text-secondary uppercase tracking-wider">
                {game.teams.away.shortName}
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary text-glow">
            {game.scores.away}
          </div>
        </div>

        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">{game.teams.home.logo}</span>
            <div>
              <h4 className="font-bold text-text-primary">{game.teams.home.name}</h4>
              <p className="text-xs text-text-secondary uppercase tracking-wider">
                {game.teams.home.shortName}
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold text-text-primary text-glow">
            {game.scores.home}
          </div>
        </div>
      </div>

      {/* Latest Key Play */}
      {game.keyPlays.length > 0 && (
        <div className="mt-4 pt-3 border-t border-accent border-opacity-20">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse-glow"></div>
            <div className="flex-1">
              <p className="text-sm text-text-secondary leading-relaxed">
                {game.keyPlays[game.keyPlays.length - 1].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
