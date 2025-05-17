import { SecurityTip } from './types.ts';

export const tips: SecurityTip[] = [
  {
    id: '1',
    text: 'Always verify the contract address before interacting with a new token or protocol.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'defi'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '2',
    text: 'Never share your private keys or seed phrases with anyone, not even support staff.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'security'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '3',
    text: 'Use hardware wallets for storing large amounts of crypto.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'security'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '4',
    text: 'Enable 2FA on all your crypto exchange accounts.',
    category: 'General',
    importance: 'high',
    tags: ['security', 'exchange'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '5',
    text: 'Regularly update your wallet software to the latest version.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'updates'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '6',
    text: 'Be cautious of airdrops and free token offers.',
    category: 'General',
    importance: 'high',
    tags: ['scams', 'tokens'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '7',
    text: 'Verify website URLs before entering sensitive information.',
    category: 'General',
    importance: 'critical',
    tags: ['phishing', 'security'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '8',
    text: 'Use different passwords for different crypto platforms.',
    category: 'General',
    importance: 'high',
    tags: ['security', 'passwords'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '9',
    text: 'Research projects thoroughly before investing.',
    category: 'DeFi',
    importance: 'high',
    tags: ['defi', 'research'],
    lastUpdated: '2024-03-20'
  },
  {
    id: '10',
    text: 'Check smart contract audits before using new DeFi protocols.',
    category: 'DeFi',
    importance: 'critical',
    tags: ['defi', 'security'],
    lastUpdated: '2024-03-20'
  },
  // ... (all other tips up to id: '219') ...
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
    tip.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
  );
}; 