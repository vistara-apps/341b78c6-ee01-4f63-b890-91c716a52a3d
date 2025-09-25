'use client';

import { Clock, Trophy, Zap, Users, Target } from 'lucide-react';
import { Notification } from '@/lib/types';

interface NotificationListItemProps {
  notification: Notification;
  variant?: 'newScore' | 'keyPlay';
  onClick?: () => void;
}

export function NotificationListItem({ 
  notification, 
  variant = 'newScore',
  onClick 
}: NotificationListItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case 'score_update':
        return Trophy;
      case 'key_play':
        return Zap;
      case 'player_highlight':
        return Target;
      case 'game_start':
      case 'game_end':
        return Users;
      default:
        return Trophy;
    }
  };

  const getPriorityColor = () => {
    switch (notification.priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-accent';
      case 'low':
        return 'border-l-text-secondary';
      default:
        return 'border-l-accent';
    }
  };

  const Icon = getIcon();
  const timeAgo = getTimeAgo(notification.timestamp);

  return (
    <div 
      className={`notification-item cursor-pointer ${getPriorityColor()} ${
        !notification.read ? 'glow-accent' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-sm ${
          notification.priority === 'high' 
            ? 'bg-red-500 bg-opacity-20 text-red-400' 
            : 'bg-accent bg-opacity-20 text-accent'
        }`}>
          <Icon className="w-4 h-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-sm text-text-primary uppercase tracking-wider">
              {notification.title}
            </h4>
            {!notification.read && (
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            )}
          </div>
          
          <p className="text-text-secondary text-sm leading-relaxed mb-2">
            {notification.message}
          </p>
          
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <Clock className="w-3 h-3" />
            <span className="uppercase tracking-wider">{timeAgo}</span>
            {notification.priority === 'high' && (
              <span className="bg-red-500 bg-opacity-20 text-red-400 px-2 py-1 rounded-sm font-bold uppercase tracking-wider">
                URGENT
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getTimeAgo(timestamp: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}
