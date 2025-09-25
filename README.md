# ScoreStream - Base Mini App

A real-time sports scores and alerts application built as a Base minikit app for Farcaster.

## Features

- **Real-time Score Alerts**: Instant notifications for live game updates
- **Personalized Team Following**: Select and follow your favorite teams
- **Key Play Summaries**: Get concise summaries of important game moments  
- **Player Performance Highlights**: Track top-performing players
- **Premium Features**: Advanced alerts and ad-free experience via crypto payments

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base network integration via OnchainKit
- **Styling**: Tailwind CSS with cyberpunk gaming theme
- **TypeScript**: Full type safety throughout
- **Components**: Modular, reusable UI components

## Theme System

ScoreStream supports multiple blockchain themes:
- **Default**: Cyberpunk sports theme with dark purple background and neon green accents
- **Celo**: Black background with yellow accents
- **Solana**: Dark purple with magenta accents  
- **Base**: Dark blue with Base blue accents
- **Coinbase**: Dark navy with Coinbase blue accents

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the app

## Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
```

## Architecture

- **App Router**: Modern Next.js 15 routing
- **OnchainKit Integration**: Base wallet and identity components
- **Mock Data**: Simulated sports data for development
- **Real-time Updates**: Simulated live score updates
- **Responsive Design**: Mobile-first approach

## Components

- `AppShell`: Main app layout with navigation
- `GameCard`: Display live and finished games
- `NotificationListItem`: Show score alerts and key plays
- `TeamSelector`: Multi-select team following interface
- `PlayerCard`: Player stats and performance highlights
- `CtaButton`: Consistent button styling

## Business Model

- Free tier with basic alerts
- Premium tier ($3/month) with advanced features
- Crypto-native payments via Base network
- Potential NFT collectibles for exclusive access

## Development

The app uses mock data for development. In production, integrate with:
- Sports data APIs (Sportradar, TheSportsDB, etc.)
- Farcaster Frame API for notifications
- Base network smart contracts for payments

## License

MIT License
