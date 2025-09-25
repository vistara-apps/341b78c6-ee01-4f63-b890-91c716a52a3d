'use client';

import { useTheme } from '../components/ThemeProvider';
import { GameCard } from '../components/GameCard';
import { NotificationListItem } from '../components/NotificationListItem';
import { PlayerCard } from '../components/PlayerCard';
import { CtaButton } from '../components/CtaButton';
import { mockGames, mockNotifications, mockPlayers } from '@/lib/mockData';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Cyberpunk Sports', description: 'Dark purple with neon green accents' },
    { id: 'celo', name: 'Celo', description: 'Black background with yellow accents' },
    { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
    { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
    { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue accents' },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-text-primary text-glow">
            Theme Preview
          </h1>
          <p className="text-text-secondary">
            Preview ScoreStream in different blockchain themes
          </p>
        </div>

        {/* Theme Selector */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider">
            Select Theme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id as any)}
                className={`p-4 rounded-sm border-2 transition-all duration-200 text-left ${
                  theme === themeOption.id
                    ? 'border-accent bg-accent bg-opacity-20 glow-accent'
                    : 'border-surface hover:border-accent'
                }`}
              >
                <h3 className="font-bold text-text-primary">{themeOption.name}</h3>
                <p className="text-sm text-text-secondary">{themeOption.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Component Previews */}
        <div className="space-y-8">
          {/* Buttons */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <CtaButton variant="primary">Primary Button</CtaButton>
              <CtaButton variant="secondary">Secondary Button</CtaButton>
              <CtaButton variant="primary" loading>Loading...</CtaButton>
            </div>
          </section>

          {/* Game Card */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Game Card
            </h2>
            <GameCard game={mockGames[0]} />
          </section>

          {/* Notification */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Notifications
            </h2>
            <div className="space-y-3">
              {mockNotifications.slice(0, 2).map((notification) => (
                <NotificationListItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </section>

          {/* Player Card */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Player Card
            </h2>
            <PlayerCard player={mockPlayers[0]} />
          </section>

          {/* Color Palette */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary uppercase tracking-wider text-glow">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-16 bg-bg border border-accent rounded-sm"></div>
                <p className="text-sm text-text-secondary">Background</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-surface border border-accent rounded-sm"></div>
                <p className="text-sm text-text-secondary">Surface</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-accent rounded-sm"></div>
                <p className="text-sm text-text-secondary">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-primary rounded-sm"></div>
                <p className="text-sm text-text-secondary">Primary</p>
              </div>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="text-center pt-8">
          <CtaButton 
            variant="secondary"
            onClick={() => window.history.back()}
          >
            Back to App
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
