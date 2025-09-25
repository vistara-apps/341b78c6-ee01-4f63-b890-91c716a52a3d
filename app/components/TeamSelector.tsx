'use client';

import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Team } from '@/lib/types';
import { mockTeams } from '@/lib/mockData';

interface TeamSelectorProps {
  variant?: 'multiSelect';
  selectedTeams?: string[];
  onSelectionChange?: (teamIds: string[]) => void;
}

export function TeamSelector({ 
  variant = 'multiSelect',
  selectedTeams = [],
  onSelectionChange 
}: TeamSelectorProps) {
  const [selected, setSelected] = useState<string[]>(selectedTeams);
  const [showAll, setShowAll] = useState(false);

  const handleTeamToggle = (teamId: string) => {
    const newSelected = selected.includes(teamId)
      ? selected.filter(id => id !== teamId)
      : [...selected, teamId];
    
    setSelected(newSelected);
    onSelectionChange?.(newSelected);
  };

  const displayTeams = showAll ? mockTeams : mockTeams.slice(0, 4);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-text-primary uppercase tracking-wider text-glow">
          Select Teams
        </h3>
        <span className="text-sm text-text-secondary">
          {selected.length} selected
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {displayTeams.map((team) => {
          const isSelected = selected.includes(team.id);
          
          return (
            <div
              key={team.id}
              className={`score-card cursor-pointer transition-all duration-200 ${
                isSelected ? 'glow-accent-strong border-accent' : 'hover:glow-accent'
              }`}
              onClick={() => handleTeamToggle(team.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{team.logo}</div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary">{team.name}</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">
                    {team.shortName}
                  </p>
                </div>
                
                <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected 
                    ? 'bg-accent border-accent text-bg' 
                    : 'border-text-secondary hover:border-accent'
                }`}>
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && mockTeams.length > 4 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full btn-secondary flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Show {mockTeams.length - 4} More Teams</span>
        </button>
      )}

      {selected.length > 0 && (
        <div className="glass-card p-4 border border-accent border-opacity-30">
          <h4 className="font-bold text-text-primary mb-2 uppercase tracking-wider">
            Following:
          </h4>
          <div className="flex flex-wrap gap-2">
            {selected.map((teamId) => {
              const team = mockTeams.find(t => t.id === teamId);
              return team ? (
                <span
                  key={teamId}
                  className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-sm text-sm font-medium uppercase tracking-wider"
                >
                  {team.logo} {team.shortName}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
