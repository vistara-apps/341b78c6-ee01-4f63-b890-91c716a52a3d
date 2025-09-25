export interface User {
  farcasterId: string;
  followedTeams: string[];
  followedPlayers: string[];
  notificationPreferences: {
    scoreUpdates: boolean;
    keyPlays: boolean;
    playerHighlights: boolean;
  };
  premiumStatus: boolean;
  paymentHistory: PaymentRecord[];
}

export interface PaymentRecord {
  id: string;
  amount: number;
  timestamp: Date;
  type: 'premium_upgrade' | 'monthly_subscription';
}

export interface Game {
  gameId: string;
  sport: 'football' | 'basketball' | 'baseball' | 'soccer' | 'hockey';
  teams: {
    home: Team;
    away: Team;
  };
  scores: {
    home: number;
    away: number;
  };
  status: 'scheduled' | 'live' | 'halftime' | 'finished';
  currentTime: string;
  keyPlays: KeyPlay[];
  startTime: Date;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export interface Player {
  playerId: string;
  name: string;
  team: string;
  position: string;
  stats: PlayerStats;
  avatar?: string;
}

export interface PlayerStats {
  points?: number;
  assists?: number;
  rebounds?: number;
  goals?: number;
  saves?: number;
  yards?: number;
  touchdowns?: number;
  [key: string]: number | undefined;
}

export interface KeyPlay {
  id: string;
  gameId: string;
  type: 'goal' | 'touchdown' | 'basket' | 'homerun' | 'save' | 'turnover';
  description: string;
  player?: string;
  team: string;
  timestamp: Date;
  quarter?: string;
  time?: string;
}

export interface Notification {
  id: string;
  type: 'score_update' | 'key_play' | 'player_highlight' | 'game_start' | 'game_end';
  title: string;
  message: string;
  gameId?: string;
  playerId?: string;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
}
