import { SecurityTip } from './types.ts';

export const tips: SecurityTip[] = [
  {
    id: '1',
    text: 'Always verify the contract address before interacting with a new token or protocol.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'defi', 'contract']
  },
  {
    id: '2',
    text: 'Never share your private keys or seed phrases with anyone, not even support staff.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'security', 'seed phrase']
  },
  {
    id: '3',
    text: 'Use hardware wallets for storing large amounts of crypto.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'hardware', 'security']
  },
  {
    id: '4',
    text: 'Enable 2FA on all your crypto exchange accounts.',
    category: 'General',
    importance: 'high',
    tags: ['security', '2fa', 'exchange']
  },
  {
    id: '5',
    text: 'Regularly update your wallet software to the latest version.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'updates', 'software']
  },
  {
    id: '6',
    text: 'Be cautious of airdrops and free token offers.',
    category: 'General',
    importance: 'high',
    tags: ['scams', 'airdrop', 'tokens']
  },
  {
    id: '7',
    text: 'Verify website URLs before entering sensitive information.',
    category: 'General',
    importance: 'critical',
    tags: ['phishing', 'security', 'url']
  },
  {
    id: '8',
    text: 'Use different passwords for different crypto platforms.',
    category: 'General',
    importance: 'high',
    tags: ['security', 'passwords']
  },
  {
    id: '9',
    text: 'Research projects thoroughly before investing.',
    category: 'DeFi',
    importance: 'high',
    tags: ['defi', 'research', 'investing']
  },
  {
    id: '10',
    text: 'Check smart contract audits before using new DeFi protocols.',
    category: 'DeFi',
    importance: 'critical',
    tags: ['defi', 'security', 'audit']
  },
  {
    id: '11',
    text: 'Be wary of too-good-to-be-true investment opportunities.',
    category: 'General',
    importance: 'critical',
    tags: ['scams', 'investing']
  },
  {
    id: '12',
    text: 'Use a separate browser or profile for crypto activities.',
    category: 'General',
    importance: 'medium',
    tags: ['security', 'browser']
  },
  {
    id: '13',
    text: 'Keep your recovery phrase in a secure offline location.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'security', 'recovery phrase']
  },
  {
    id: '14',
    text: 'Verify NFT collection addresses before purchasing.',
    category: 'NFT',
    importance: 'high',
    tags: ['nft', 'security', 'address']
  },
  {
    id: '15',
    text: 'Use a VPN when accessing crypto platforms on public WiFi.',
    category: 'General',
    importance: 'medium',
    tags: ['security', 'vpn', 'wifi']
  },
  {
    id: '16',
    text: 'Check token contract addresses on multiple block explorers.',
    category: 'DeFi',
    importance: 'high',
    tags: ['defi', 'tokens', 'contract']
  },
  {
    id: '17',
    text: 'Be cautious of DMs offering investment opportunities.',
    category: 'Social',
    importance: 'critical',
    tags: ['scams', 'social', 'dm']
  },
  {
    id: '18',
    text: 'Use a separate email for crypto-related accounts.',
    category: 'General',
    importance: 'medium',
    tags: ['security', 'email']
  },
  {
    id: '19',
    text: 'Verify the authenticity of crypto giveaways.',
    category: 'Social',
    importance: 'critical',
    tags: ['scams', 'social', 'giveaway']
  },
  {
    id: '20',
    text: 'Keep track of your transaction history for tax purposes.',
    category: 'General',
    importance: 'medium',
    tags: ['tax', 'records', 'history']
  },
  {
    id: '21',
    text: 'Enable two-factor authentication on all crypto-related accounts.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'security']
  },
  {
    id: '22',
    text: 'Be cautious of unsolicited DMs offering investment opportunities.',
    category: 'Social',
    importance: 'high',
    tags: ['social', 'scam']
  },
  {
    id: '23',
    text: 'Use a separate wallet for testing and experimenting with new protocols.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '24',
    text: 'Be wary of projects promising unrealistic returns.',
    category: 'General',
    importance: 'high',
    tags: ['scam', 'general']
  },
  {
    id: '25',
    text: 'Always check the official website and social media channels of a project.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '26',
    text: 'Use a VPN when accessing your crypto accounts from public networks.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'security']
  },
  {
    id: '27',
    text: 'Use a separate computer for crypto-related activities if possible.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'security']
  },
  {
    id: '28',
    text: 'Be cautious of projects with no clear community engagement.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '29',
    text: 'Use a separate wallet for each major protocol or platform.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '30',
    text: 'Be cautious of projects with no clear audit history.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '31',
    text: 'Use a separate wallet for NFT transactions.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '32',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '33',
    text: 'Use a separate wallet for DeFi activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '34',
    text: 'Be cautious of projects with no clear revenue model.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '35',
    text: 'Use a separate wallet for trading activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '36',
    text: 'Be cautious of projects with no clear competitive advantage.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '37',
    text: 'Use a separate wallet for staking activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'staking']
  },
  {
    id: '38',
    text: 'Be cautious of projects with no clear market fit.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '39',
    text: 'Use a separate wallet for yield farming activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '40',
    text: 'Be cautious of projects with no clear user base.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '41',
    text: 'Use a separate wallet for lending activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '42',
    text: 'Be cautious of projects with no clear development team.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '43',
    text: 'Use a separate wallet for borrowing activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '44',
    text: 'Be cautious of projects with no clear code repository.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '45',
    text: 'Use a separate wallet for liquidity provision.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '46',
    text: 'Be cautious of projects with no clear documentation.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '47',
    text: 'Use a separate wallet for token swaps.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '48',
    text: 'Be cautious of projects with no clear support channels.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '49',
    text: 'Use a separate wallet for bridge transactions.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '50',
    text: 'Be cautious of projects with no clear security measures.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '51',
    text: 'Use a separate wallet for cross-chain transactions.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '52',
    text: 'Be cautious of projects with no clear risk management.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '53',
    text: 'Use a separate wallet for layer 2 transactions.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '54',
    text: 'Be cautious of projects with no clear scalability plan.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '55',
    text: 'Use a separate wallet for testnet activities.',
    category: 'Wallet',
    importance: 'low',
    tags: ['wallet', 'testing']
  },
  {
    id: '56',
    text: 'Be cautious of projects with no clear upgrade path.',
    category: 'General',
    importance: 'medium',
    tags: ['general', 'research']
  },
  {
    id: '57',
    text: 'Use a separate wallet for mainnet activities.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'general']
  },
  {
    id: '58',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '59',
    text: 'Use a separate wallet for governance activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '60',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '61',
    text: 'Use a separate wallet for DAO activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '62',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '63',
    text: 'Use a separate wallet for NFT minting.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '64',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '65',
    text: 'Use a separate wallet for NFT trading.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '66',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '67',
    text: 'Use a separate wallet for NFT staking.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '68',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '69',
    text: 'Use a separate wallet for NFT lending.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '70',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '71',
    text: 'Use a separate wallet for NFT borrowing.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '72',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '73',
    text: 'Use a separate wallet for NFT yield farming.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '74',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '75',
    text: 'Use a separate wallet for NFT liquidity provision.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '76',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '77',
    text: 'Use a separate wallet for NFT token swaps.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '78',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '79',
    text: 'Use a separate wallet for NFT bridge transactions.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'nft']
  },
  {
    id: '80',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '81',
    text: 'Use a separate wallet for NFT cross-chain transactions.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'nft']
  },
  {
    id: '82',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '83',
    text: 'Use a separate wallet for NFT layer 2 transactions.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '84',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '85',
    text: 'Use a separate wallet for NFT testnet activities.',
    category: 'Wallet',
    importance: 'low',
    tags: ['wallet', 'nft']
  },
  {
    id: '86',
    text: 'Be cautious of projects with no clear token utility.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '87',
    text: 'Use a separate wallet for NFT mainnet activities.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'nft']
  },
  {
    id: '88',
    text: 'Be cautious of projects with no clear token distribution.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '89',
    text: 'Use a separate wallet for NFT governance activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'nft']
  },
  {
    id: '90',
    text: 'Be cautious of projects with no clear token economics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '91',
    text: 'Use a separate wallet for each major blockchain network.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'security']
  },
  {
    id: '92',
    text: 'Be cautious of projects with no clear token vesting schedule.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '93',
    text: 'Use a separate wallet for gaming activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'gaming']
  },
  {
    id: '94',
    text: 'Be cautious of projects with no clear token lock-up period.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '95',
    text: 'Use a separate wallet for metaverse activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'metaverse']
  },
  {
    id: '96',
    text: 'Be cautious of projects with no clear token inflation rate.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '97',
    text: 'Use a separate wallet for social media activities.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'social']
  },
  {
    id: '98',
    text: 'Be cautious of projects with no clear token burn mechanism.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '99',
    text: 'Use a separate wallet for identity verification.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'identity']
  },
  {
    id: '100',
    text: 'Be cautious of projects with no clear token staking rewards.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '101',
    text: 'Use a separate wallet for oracle services.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'oracle']
  },
  {
    id: '102',
    text: 'Be cautious of projects with no clear token governance rights.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '103',
    text: 'Use a separate wallet for insurance protocols.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '104',
    text: 'Be cautious of projects with no clear token utility in the ecosystem.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '105',
    text: 'Use a separate wallet for prediction markets.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'defi']
  },
  {
    id: '106',
    text: 'Be cautious of projects with no clear token use cases.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '107',
    text: 'Use a separate wallet for synthetic assets.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '108',
    text: 'Be cautious of projects with no clear token value proposition.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '109',
    text: 'Use a separate wallet for options trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '110',
    text: 'Be cautious of projects with no clear token demand drivers.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '111',
    text: 'Use a separate wallet for futures trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '112',
    text: 'Be cautious of projects with no clear token supply controls.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '113',
    text: 'Use a separate wallet for margin trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '114',
    text: 'Be cautious of projects with no clear token price stability mechanisms.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '115',
    text: 'Use a separate wallet for perpetual trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '116',
    text: 'Be cautious of projects with no clear token liquidity pools.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '117',
    text: 'Use a separate wallet for spot trading.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '118',
    text: 'Be cautious of projects with no clear token market makers.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '119',
    text: 'Use a separate wallet for algorithmic trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '120',
    text: 'Be cautious of projects with no clear token trading pairs.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '121',
    text: 'Use a separate wallet for copy trading.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '122',
    text: 'Be cautious of projects with no clear token trading volume.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '123',
    text: 'Use a separate wallet for social trading.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '124',
    text: 'Be cautious of projects with no clear token trading fees.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '125',
    text: 'Use a separate wallet for automated trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '126',
    text: 'Be cautious of projects with no clear token trading incentives.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '127',
    text: 'Use a separate wallet for portfolio tracking.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'portfolio']
  },
  {
    id: '128',
    text: 'Be cautious of projects with no clear token trading rewards.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '129',
    text: 'Use a separate wallet for tax reporting.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'tax']
  },
  {
    id: '130',
    text: 'Be cautious of projects with no clear token trading competitions.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '131',
    text: 'Use a separate wallet for yield optimization.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '132',
    text: 'Be cautious of projects with no clear token trading tournaments.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '133',
    text: 'Use a separate wallet for risk management.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'security']
  },
  {
    id: '134',
    text: 'Be cautious of projects with no clear token trading leaderboards.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '135',
    text: 'Use a separate wallet for portfolio rebalancing.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'portfolio']
  },
  {
    id: '136',
    text: 'Be cautious of projects with no clear token trading analytics.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '137',
    text: 'Use a separate wallet for asset allocation.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'portfolio']
  },
  {
    id: '138',
    text: 'Be cautious of projects with no clear token trading signals.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '139',
    text: 'Use a separate wallet for position sizing.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '140',
    text: 'Be cautious of projects with no clear token trading strategies.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '141',
    text: 'Use a separate wallet for stop-loss orders.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '142',
    text: 'Be cautious of projects with no clear token trading tools.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '143',
    text: 'Use a separate wallet for take-profit orders.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '144',
    text: 'Be cautious of projects with no clear token trading indicators.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '145',
    text: 'Use a separate wallet for limit orders.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '146',
    text: 'Be cautious of projects with no clear token trading charts.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '147',
    text: 'Use a separate wallet for market orders.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'trading']
  },
  {
    id: '148',
    text: 'Be cautious of projects with no clear token trading patterns.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '149',
    text: 'Use a separate wallet for trailing stops.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '150',
    text: 'Be cautious of projects with no clear token trading signals.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '151',
    text: 'Use a separate wallet for grid trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '152',
    text: 'Be cautious of projects with no clear token trading bots.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '153',
    text: 'Use a separate wallet for arbitrage trading.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '154',
    text: 'Be cautious of projects with no clear token trading APIs.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '155',
    text: 'Use a separate wallet for market making.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'trading']
  },
  {
    id: '156',
    text: 'Be cautious of projects with no clear token trading SDKs.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '157',
    text: 'Use a separate wallet for liquidity provision.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '158',
    text: 'Be cautious of projects with no clear token trading documentation.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '159',
    text: 'Use a separate wallet for yield farming.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'defi']
  },
  {
    id: '160',
    text: 'Be cautious of projects with no clear token trading tutorials.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '161',
    text: 'Use a separate wallet for staking rewards.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '162',
    text: 'Be cautious of projects with no clear token trading guides.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '163',
    text: 'Use a separate wallet for governance voting.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '164',
    text: 'Be cautious of projects with no clear token trading resources.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '165',
    text: 'Use a separate wallet for DAO participation.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '166',
    text: 'Be cautious of projects with no clear token trading support.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '167',
    text: 'Use a separate wallet for protocol governance.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '168',
    text: 'Be cautious of projects with no clear token trading community.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '169',
    text: 'Use a separate wallet for token voting.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '170',
    text: 'Be cautious of projects with no clear token trading feedback.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '171',
    text: 'Use a separate wallet for proposal submission.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '172',
    text: 'Be cautious of projects with no clear token trading updates.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '173',
    text: 'Use a separate wallet for delegation.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'governance']
  },
  {
    id: '174',
    text: 'Be cautious of projects with no clear token trading roadmap.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '175',
    text: 'Use a separate wallet for validator operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '176',
    text: 'Be cautious of projects with no clear token trading milestones.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '177',
    text: 'Use a separate wallet for node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '178',
    text: 'Be cautious of projects with no clear token trading achievements.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '179',
    text: 'Use a separate wallet for mining operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'mining']
  },
  {
    id: '180',
    text: 'Be cautious of projects with no clear token trading progress.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '181',
    text: 'Use a separate wallet for masternode operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '182',
    text: 'Be cautious of projects with no clear token trading development.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '183',
    text: 'Use a separate wallet for supernode operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '184',
    text: 'Be cautious of projects with no clear token trading innovation.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '185',
    text: 'Use a separate wallet for guardian node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '186',
    text: 'Be cautious of projects with no clear token trading features.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '187',
    text: 'Use a separate wallet for sentinel node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '188',
    text: 'Be cautious of projects with no clear token trading capabilities.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '189',
    text: 'Use a separate wallet for service node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '190',
    text: 'Be cautious of projects with no clear token trading functionality.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '191',
    text: 'Use a separate wallet for archive node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '192',
    text: 'Be cautious of projects with no clear token trading performance.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '193',
    text: 'Use a separate wallet for light node operations.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'staking']
  },
  {
    id: '194',
    text: 'Be cautious of projects with no clear token trading efficiency.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '195',
    text: 'Use a separate wallet for full node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '196',
    text: 'Be cautious of projects with no clear token trading scalability.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '197',
    text: 'Use a separate wallet for pruning node operations.',
    category: 'Wallet',
    importance: 'medium',
    tags: ['wallet', 'staking']
  },
  {
    id: '198',
    text: 'Be cautious of projects with no clear token trading reliability.',
    category: 'General',
    importance: 'high',
    tags: ['general', 'research']
  },
  {
    id: '199',
    text: 'Use a separate wallet for archive node operations.',
    category: 'Wallet',
    importance: 'high',
    tags: ['wallet', 'staking']
  },
  {
    id: '200',
    text: 'Be cautious of projects with no clear token trading security.',
    category: 'General',
    importance: 'critical',
    tags: ['general', 'research']
  },
  {
    id: '201',
    text: 'Implement a comprehensive key management strategy with proper backup and recovery procedures.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['keys', 'security', 'backup']
  },
  {
    id: '202',
    text: 'Regularly rotate access keys and credentials for all critical systems.',
    category: 'General',
    importance: 'high',
    tags: ['keys', 'security', 'rotation']
  },
  {
    id: '203',
    text: 'Use multi-signature wallets for high-value transactions and treasury management.',
    category: 'Wallet',
    importance: 'critical',
    tags: ['wallet', 'security', 'multisig']
  },
  {
    id: '204',
    text: 'Implement proper access controls and role-based permissions for all team members.',
    category: 'General',
    importance: 'high',
    tags: ['access', 'security', 'permissions']
  },
  {
    id: '205',
    text: 'Regularly audit and review access permissions to ensure least privilege principle.',
    category: 'General',
    importance: 'high',
    tags: ['access', 'security', 'audit']
  },
  {
    id: '206',
    text: 'Implement proper logging and monitoring for all critical systems and transactions.',
    category: 'General',
    importance: 'high',
    tags: ['monitoring', 'security', 'logging']
  },
  {
    id: '207',
    text: 'Use secure development practices and follow the principle of least privilege in code.',
    category: 'General',
    importance: 'high',
    tags: ['development', 'security', 'code']
  },
  {
    id: '208',
    text: 'Implement proper input validation and sanitization in all user-facing applications.',
    category: 'General',
    importance: 'critical',
    tags: ['development', 'security', 'validation']
  },
  {
    id: '209',
    text: 'Regularly update and patch all dependencies and third-party libraries.',
    category: 'General',
    importance: 'high',
    tags: ['development', 'security', 'updates']
  },
  {
    id: '210',
    text: 'Implement proper error handling and logging in all applications.',
    category: 'General',
    importance: 'medium',
    tags: ['development', 'security', 'logging']
  },
  {
    id: '211',
    text: 'Use secure communication channels (HTTPS, WSS) for all network communications.',
    category: 'General',
    importance: 'critical',
    tags: ['infrastructure', 'security', 'communication']
  },
  {
    id: '212',
    text: 'Implement proper backup and disaster recovery procedures for all critical data.',
    category: 'General',
    importance: 'critical',
    tags: ['infrastructure', 'security', 'backup']
  },
  {
    id: '213',
    text: 'Use secure configuration management for all infrastructure components.',
    category: 'General',
    importance: 'high',
    tags: ['infrastructure', 'security', 'configuration']
  },
  {
    id: '214',
    text: 'Implement proper network segmentation and access controls.',
    category: 'General',
    importance: 'high',
    tags: ['infrastructure', 'security', 'network']
  },
  {
    id: '215',
    text: 'Regularly conduct security audits and penetration testing.',
    category: 'General',
    importance: 'high',
    tags: ['security', 'audit', 'testing']
  },
  {
    id: '216',
    text: 'Implement proper incident response and recovery procedures.',
    category: 'General',
    importance: 'critical',
    tags: ['security', 'incident', 'response']
  },
  {
    id: '217',
    text: 'Use secure coding practices and follow established security guidelines.',
    category: 'General',
    importance: 'high',
    tags: ['development', 'security', 'coding']
  },
  {
    id: '218',
    text: 'Implement proper access logging and monitoring for all critical systems.',
    category: 'General',
    importance: 'high',
    tags: ['monitoring', 'security', 'logging']
  },
  {
    id: '219',
    text: 'Regularly review and update security policies and procedures.',
    category: 'General',
    importance: 'high',
    tags: ['security', 'policies', 'procedures']
  }
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