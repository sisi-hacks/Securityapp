import { useState } from 'react';
import { tips } from './tips';
import './App.css';
import { sdk } from "@farcaster/frame-sdk";
import { useEffect } from "react";

function getRiskColor(importance: string) {
  switch (importance) {
    case 'critical': return 'linear-gradient(90deg, #00e676, #ffd600, #ff1744)';
    case 'high': return 'linear-gradient(90deg, #ffd600, #ff9100, #ff1744)';
    case 'medium': return 'linear-gradient(90deg, #00e676, #ffd600)';
    case 'low': return 'linear-gradient(90deg, #00e676, #2979ff)';
    default: return '#eee';
  }
}

function getSecurityScore(importance: string): number {
  switch (importance) {
    case 'critical': return 40;
    case 'high': return 60;
    case 'medium': return 80;
    case 'low': return 95;
    default: return 50;
  }
}

function getRiskLevel(importance: string): number {
  switch (importance) {
    case 'critical': return 9;
    case 'high': return 7;
    case 'medium': return 4;
    case 'low': return 2;
    default: return 5;
  }
}

function getImportanceEmoji(importance: string): string {
  switch (importance) {
    case 'critical': return '🚨';
    case 'high': return '⚠️';
    case 'medium': return '⚡';
    case 'low': return '✅';
    default: return 'ℹ️';
  }
}

const maxRisk = 10;

function getRandomTipIndex(excludeIndex?: number): number {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * tips.length);
  } while (randomIndex === excludeIndex);
  return randomIndex;
}

export default function App() {
  const [currentTipIndex, setCurrentTipIndex] = useState(getRandomTipIndex());
  const currentTip = tips.length > 0 ? tips[currentTipIndex] : undefined;

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleNext = () => {
    setCurrentTipIndex(getRandomTipIndex(currentTipIndex));
  };
  
  const handleShareTwitter = () => {
    if (!currentTip) return;
    const text = encodeURIComponent(`Web3 security tip: ${currentTip.text}. follow @A_bashira on X for more security tips and insights.`);
    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
  };
  const handleShareFarcaster = () => {
    if (!currentTip) return;
    const text = encodeURIComponent(`Web3 security tip: ${currentTip.text}. follow @sisixoxo for more security tips and insights.`);
    window.open(`https://warpcast.com/~/compose?text=${text}`, '_blank');
  };

  if (!currentTip) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>No tips available.</div>;
  }

  const securityScore = getSecurityScore(currentTip.importance);
  const riskLevel = getRiskLevel(currentTip.importance);
  const importanceEmoji = getImportanceEmoji(currentTip.importance);

  return (
    <div style={{ minHeight: '100vh', background: '#181828', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <div style={{ background: '#23233a', color: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0002', maxWidth: 300, width: '100%', margin: '24px', padding: 20, position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ color: '#bdbdbd', fontSize: 13 }}>Tip {currentTipIndex + 1} of {tips.length}</span>
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <span style={{ background: '#ff1744', color: '#fff', borderRadius: 8, padding: '2px 10px', fontSize: 12, fontWeight: 600 }}>{currentTip.importance.toUpperCase()}</span>
          <span style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8, padding: '2px 10px', fontSize: 12, fontWeight: 600 }}>{currentTip.category.toUpperCase()}</span>
          <span style={{ background: '#ffd600', color: '#181828', borderRadius: 8, padding: '2px 10px', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span role="img" aria-label="alert">{importanceEmoji}</span> {currentTip.importance.charAt(0).toUpperCase() + currentTip.importance.slice(1)} Risk
          </span>
        </div>
        {/* Main Tip */}
        <div style={{ fontSize: 18, color: '#fff', margin: '18px 0', fontWeight: 500, lineHeight: 1.4 }}>{currentTip.text}</div>
        {/* Score Bar */}
        <div style={{ margin: '18px 0 6px 0', width: '100%' }}>
          <div style={{ height: 10, borderRadius: 6, background: getRiskColor(currentTip.importance) }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#bdbdbd', marginBottom: 10 }}>
          <span>Security Score: {securityScore}/100</span>
          <span>Risk Level: {riskLevel}/{maxRisk}</span>
        </div>
        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8, margin: '18px 0 0 0', justifyContent: 'space-between' }}>
          <button onClick={handleShareFarcaster} style={{ flex: 1, background: '#43e97b', color: '#181828', border: 'none', borderRadius: 8, padding: '10px 0', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Share Tip</button>
          <button onClick={handleShareTwitter} style={{ flex: 1, background: '#1da1f2', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 0', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Share on Twitter</button>
          <button onClick={handleNext} style={{ flex: 1, background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 0', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Next</button>
        </div>
        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: 'center', color: '#bdbdbd', fontSize: 13 }}>
          Follow for more security insights
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 8 }}>
            <a href="https://x.com/A_bashira" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', fontSize: 22 }} aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.37 4.1 7.6 1.67 4.98a4.48 4.48 0 0 0-.61 2.26c0 1.56.795 2.94 2.01 3.75a4.48 4.48 0 0 1-2.03-.56v.06c0 2.18 1.55 4 3.6 4.42-.377.103-.775.16-1.185.16-.29 0-.57-.028-.845-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
            </a>
            <a href="https://warpcast.com/sisixoxo" target="_blank" rel="noopener noreferrer" style={{ color: '#8b5cf6', fontSize: 22 }} aria-label="Warpcast">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="16" r="16" fill="#8b5cf6"/><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial" fontWeight="bold">W</text></svg>
            </a>
            <a href="https://sisipepper.medium.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 22 }} aria-label="Medium">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
