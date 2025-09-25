import { Game, Team, Player, KeyPlay, Notification } from './types';

export const mockTeams: Team[] = [
  {
    id: 'lakers',
    name: 'Los Angeles Lakers',
    shortName: 'LAL',
    logo: '🏀',
    colors: { primary: '#552583', secondary: '#FDB927' }
  },
  {
    id: 'warriors',
    name: 'Golden State Warriors',
    shortName: 'GSW',
    logo: '⚡',
    colors: { primary: '#1D428A', secondary: '#FFC72C' }
  },
  {
    id: 'chiefs',
    name: 'Kansas City Chiefs',
    shortName: 'KC',
    logo: '🏈',
    colors: { primary: '#E31837', secondary: '#FFB81C' }
  },
  {
    id: 'bills',
    name: 'Buffalo Bills',
    shortName: 'BUF',
    logo: '🦬',
    colors: { primary: '#00338D', secondary: '#C60C30' }
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    shortName: 'RM',
    logo: '⚪',
    colors: { primary: '#FFFFFF', secondary: '#00529F' }
  },
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    shortName: 'BAR',
    logo: '🔵',
    colors: { primary: '#A50044', secondary: '#004D98' }
  }
];

export const mockPlayers: Player[] = [
  {
    playerId: 'lebron',
    name: 'LeBron James',
    team: 'lakers',
    position: 'SF',
    stats: { points: 28, assists: 8, rebounds: 7 }
  },
  {
    playerId: 'curry',
    name: 'Stephen Curry',
    team: 'warriors',
    position: 'PG',
    stats: { points: 32, assists: 6, rebounds: 4 }
  },
  {
    playerId: 'mahomes',
    name: 'Patrick Mahomes',
    team: 'chiefs',
    position: 'QB',
    stats: { yards: 285, touchdowns: 3 }
  },
  {
    playerId: 'allen',
    name: 'Josh Allen',
    team: 'bills',
    position: 'QB',
    stats: { yards: 312, touchdowns: 2 }
  }
];

export const mockGames: Game[] = [
  {
    gameId: 'lal-gsw-001',
    sport: 'basketball',
    teams: {
      home: mockTeams[0], // Lakers
      away: mockTeams[1]  // Warriors
    },
    scores: { home: 108, away: 112 },
    status: 'live',
    currentTime: '3rd Quarter - 8:42',
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    keyPlays: [
      {
        id: 'play1',
        gameId: 'lal-gsw-001',
        type: 'basket',
        description: 'Stephen Curry drains a 3-pointer from downtown!',
        player: 'curry',
        team: 'warriors',
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        quarter: '3rd',
        time: '8:42'
      }
    ]
  },
  {
    gameId: 'kc-buf-001',
    sport: 'football',
    teams: {
      home: mockTeams[2], // Chiefs
      away: mockTeams[3]  // Bills
    },
    scores: { home: 21, away: 14 },
    status: 'live',
    currentTime: '2nd Quarter - 5:23',
    startTime: new Date(Date.now() - 1.5 * 60 * 60 * 1000), // 1.5 hours ago
    keyPlays: [
      {
        id: 'play2',
        gameId: 'kc-buf-001',
        type: 'touchdown',
        description: 'Patrick Mahomes connects with Travis Kelce for a 15-yard TD!',
        player: 'mahomes',
        team: 'chiefs',
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
        quarter: '2nd',
        time: '5:23'
      }
    ]
  },
  {
    gameId: 'rm-bar-001',
    sport: 'soccer',
    teams: {
      home: mockTeams[4], // Real Madrid
      away: mockTeams[5]  // Barcelona
    },
    scores: { home: 2, away: 1 },
    status: 'finished',
    currentTime: 'Full Time',
    startTime: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    keyPlays: [
      {
        id: 'play3',
        gameId: 'rm-bar-001',
        type: 'goal',
        description: 'Vinícius Jr. scores the winning goal in El Clásico!',
        player: 'vinicius',
        team: 'real-madrid',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        quarter: '2nd Half',
        time: '87\''
      }
    ]
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif1',
    type: 'score_update',
    title: 'Score Update',
    message: 'Warriors take the lead 112-108 in the 3rd quarter!',
    gameId: 'lal-gsw-001',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false,
    priority: 'high'
  },
  {
    id: 'notif2',
    type: 'key_play',
    title: 'Touchdown!',
    message: 'Mahomes to Kelce for 15 yards - Chiefs extend their lead!',
    gameId: 'kc-buf-001',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    read: false,
    priority: 'high'
  },
  {
    id: 'notif3',
    type: 'player_highlight',
    title: 'Player Spotlight',
    message: 'Stephen Curry is on fire with 32 points and 6 assists!',
    playerId: 'curry',
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
    read: true,
    priority: 'medium'
  },
  {
    id: 'notif4',
    type: 'game_end',
    title: 'El Clásico Final',
    message: 'Real Madrid defeats Barcelona 2-1 in a thrilling match!',
    gameId: 'rm-bar-001',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    read: true,
    priority: 'medium'
  }
];
