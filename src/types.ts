export interface SecurityTip {
  id: string;
  text: string;
  category: 'Wallet' | 'General' | 'DeFi' | 'NFT' | 'Social';
  importance: 'critical' | 'high' | 'medium' | 'low';
  tags: string[];
  lastUpdated?: string;
} 