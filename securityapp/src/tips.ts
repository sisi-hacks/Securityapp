import { SecurityTip } from './types';

export const tips: SecurityTip[] = [
  {
    id: '1',
    text: 'Always verify the contract address before interacting with a new token or protocol.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'defi'],
    lastUpdated: '2024-03-20'
  },
  // ... existing code ...
];

export function getTodaysTip(): SecurityTip {
  const index = new Date().getDate() % tips.length;
  return tips[index];
}

export function getTipsByCategory(category: SecurityTip['category']): SecurityTip[] {
  return tips.filter(tip => tip.category === category);
}

export function getTipsByImportance(importance: SecurityTip['importance']): SecurityTip[] {
  return tips.filter(tip => tip.importance === importance);
}

export const searchTips = (query: string): SecurityTip[] => {
  const lowerQuery = query.toLowerCase();
  return tips.filter(tip => 
    tip.text.toLowerCase().includes(lowerQuery) ||
    tip.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}; 