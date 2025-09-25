'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { GameCard } from './components/GameCard';
import { NotificationListItem } from './components/NotificationListItem';
import { TeamSelector } from './components/TeamSelector';
import { PlayerCard } from './components/PlayerCard';
import { CtaButton } from './components/CtaButton';
import { mockGames, mockNotifications, mockPlayers } from '@/lib/mockData';
import { Trophy, Zap, Bell, Crown, Wallet } from 'lucide-react';
import { ConnectWallet, Wallet as OnchainWallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

export default function HomePage() {
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new notification
      const newNotification = {
        id: `notif-${Date.now()}`,
        type: 'score_update' as const,
        title: 'Live Update',
        message: 'Game score updated! Check the latest action.',
        timestamp: new Date(),
        read: false,
        priority: 'medium' as const
      };
      
      setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNotificationClick = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, read: true }
          : notif
      )
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const liveGames = mockGames.filter(game => game.status === 'live');
  const recentGames = mockGames.filter(game => game.status === 'finished').slice(0, 2);

  return (
    <AppShell>
      <div className="space-y-8 pb-20">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Live Sports Hub</span>
          </div>
          
          <h1 className="text-3xl font-bold text-text-primary text-glow-strong">
            Never Miss a Moment
          </h1>
          
          <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
            Get instant alerts, follow your teams, and catch every key play in real-time.
          </p>

          {/* Wallet Connection */}
          <div className="flex justify-center">
            <OnchainWallet>
              <ConnectWallet>
                <div className="btn-primary flex items-center space-x-2">
                  <Wallet className="w-4 h-4" />
                  <span>Connect Wallet</span>
                </div>
                <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-sm">
                  <Avatar className="w-6 h-6" />
                  <Name className="text-text-primary font-medium" />
                </div>
              </ConnectWallet>
            </OnchainWallet>
          </div>
        </div>

        {/* Live Games */}
        {liveGames.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
                Live Now
              </h2>
            </div>
            
            <div className="space-y-4">
              {liveGames.map((game) => (
                <GameCard key={game.gameId} game={game} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Notifications */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
                Latest Alerts
              </h2>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            {notifications.slice(0, 4).map((notification) => (
              <NotificationListItem
                key={notification.id}
                notification={notification}
                onClick={() => handleNotificationClick(notification.id)}
              />
            ))}
          </div>
        </section>

        {/* Team Selection */}
        <section className="space-y-4">
          <TeamSelector
            selectedTeams={selectedTeams}
            onSelectionChange={setSelectedTeams}
          />
        </section>

        {/* Player Highlights */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Top Performers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {mockPlayers.slice(0, 2).map((player) => (
              <PlayerCard key={player.playerId} player={player} />
            ))}
          </div>
        </section>

        {/* Recent Games */}
        {recentGames.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Recent Results
            </h2>
            
            <div className="space-y-4">
              {recentGames.map((game) => (
                <GameCard key={game.gameId} game={game} />
              ))}
            </div>
          </section>
        )}

        {/* Premium CTA */}
        <section className="glass-card p-6 border border-accent border-opacity-30 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-accent">
            <Crown className="w-6 h-6" />
            <h3 className="text-lg font-bold uppercase tracking-wider">Premium Features</h3>
          </div>
          
          <p className="text-text-secondary">
            Get advanced player alerts, historical data, and an ad-free experience.
          </p>
          
          <div className="flex flex-col space-y-2">
            <CtaButton 
              variant="primary"
              onClick={() => setShowPremiumModal(true)}
            >
              Upgrade to Premium - $3/month
            </CtaButton>
            <p className="text-xs text-text-secondary">
              Pay with crypto • Cancel anytime
            </p>
          </div>
        </section>
      </div>

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-bg bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="glass-card p-6 max-w-sm w-full space-y-4 glow-accent-strong">
            <div className="text-center">
              <Crown className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-primary text-glow">
                Premium Features
              </h3>
            </div>
            
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>✓ Advanced player alerts</li>
              <li>✓ Historical game data</li>
              <li>✓ Ad-free experience</li>
              <li>✓ Priority notifications</li>
              <li>✓ Custom alert settings</li>
            </ul>
            
            <div className="space-y-2">
              <CtaButton variant="primary">
                Pay $3 with Crypto
              </CtaButton>
              <CtaButton 
                variant="secondary"
                onClick={() => setShowPremiumModal(false)}
              >
                Maybe Later
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
