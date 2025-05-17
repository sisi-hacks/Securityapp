import { useState } from 'react';
import { tips, searchTips } from './tips';
import './App.css';
import { SecurityTip } from './types';

function getRelatedTips(currentTip: SecurityTip) {
  // Find up to 2 related tips by shared tags, excluding the current tip
  return tips.filter(
    (tip) =>
      tip.id !== currentTip.id &&
      tip.tags.some((tag) => currentTip.tags.includes(tag))
  ).slice(0, 2);
}

function getRiskColor(importance: string) {
  switch (importance) {
    case 'critical': return 'linear-gradient(90deg, #ff1744, #ff9100)';
    case 'high': return 'linear-gradient(90deg, #ff9100, #ffd600)';
    case 'medium': return 'linear-gradient(90deg, #ffd600, #00e676)';
    case 'low': return 'linear-gradient(90deg, #00e676, #2979ff)';
    default: return '#eee';
  }
}

function App() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const currentTip = tips[currentTipIndex];
  const relatedTips = getRelatedTips(currentTip);

  const handleNext = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const handlePrevious = () => {
    setCurrentTipIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Web3 Security Tip #${currentTip.id}: ${currentTip.text} #Web3Security #Crypto`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const handleShareFarcaster = () => {
    const text = encodeURIComponent(`Web3 Security Tip #${currentTip.id}: ${currentTip.text} #Web3Security #Crypto`);
    window.open(`https://warpcast.com/~/compose?text=${text}`, '_blank');
  };

  return (
    <div className="frame-container" style={{ background: '#181828', minHeight: '100vh', padding: 0 }}>
      <div className="tip-card" style={{ background: '#23233a', color: '#fff', maxWidth: 700, width: '100%', borderRadius: 18, boxShadow: '0 4px 24px #0002', margin: '40px auto', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>Tip {currentTipIndex + 1} of {tips.length}</span>
          <span style={{ marginLeft: 8, color: '#ffd600', fontSize: 18 }}>★</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <span className="category-badge">{currentTip.category.toUpperCase()}</span>
          <span className="importance-badge" style={{ background: currentTip.importance === 'critical' ? '#ff1744' : currentTip.importance === 'high' ? '#ff9100' : currentTip.importance === 'medium' ? '#ffd600' : '#00e676', color: '#181828' }}>{currentTip.importance.toUpperCase()}</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          {currentTip.tags.map((tag) => (
            <span key={tag} className="tag-badge">{tag}</span>
          ))}
        </div>
        <div style={{ margin: '18px 0 10px 0', fontWeight: 600, color: '#ff1744', fontSize: 18 }}>Threat Level: {currentTip.importance.charAt(0).toUpperCase() + currentTip.importance.slice(1)}</div>
        <div style={{ height: 10, borderRadius: 6, background: getRiskColor(currentTip.importance), marginBottom: 18 }} />
        <div className="tip-text" style={{ fontSize: 20, margin: '18px 0', color: '#fff' }}>{currentTip.text}</div>
        <div style={{ background: '#23233a', borderRadius: 10, padding: 16, margin: '18px 0', border: '1px solid #333' }}>
          <div style={{ fontWeight: 600, marginBottom: 8, color: '#bdbdbd' }}>Related Security Tips:</div>
          {relatedTips.length === 0 ? (
            <div style={{ color: '#666' }}>No related tips found.</div>
          ) : (
            relatedTips.map((tip) => (
              <div key={tip.id} style={{ color: '#bdbdbd', marginBottom: 4 }}>{tip.text}</div>
            ))
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={handlePrevious} className="nav-btn">Previous</button>
            <button onClick={handleNext} className="nav-btn">Next</button>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={handleShareTwitter} className="share-btn" style={{ background: '#1da1f2' }}>Share on Twitter</button>
            <button onClick={handleShareFarcaster} className="share-btn" style={{ background: '#8b5cf6' }}>Share on Farcaster</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
