import { tips } from '../tips';

export async function handleFrameAction(
  buttonIndex: number,
  inputText?: string,
  state?: string
) {
  // Parse the current state or initialize with default values
  const currentState = state ? JSON.parse(state) : { tipIndex: 0 };
  
  let newState = { ...currentState };
  let message = '';

  switch (buttonIndex) {
    case 0: // Previous Tip
      newState.tipIndex = (currentState.tipIndex - 1 + tips.length) % tips.length;
      break;
    case 1: // Next Tip
      newState.tipIndex = (currentState.tipIndex + 1) % tips.length;
      break;
    case 2: // Share Tip
      const tip = tips[currentState.tipIndex];
      message = `🔒 Web3 Security Tip #${tip.id}:\n\n${tip.text}\n\n#Web3Security #Crypto`;
      break;
  }

  // If there's a search query, filter tips
  if (inputText) {
    const searchResults = tips.filter(tip => 
      tip.text.toLowerCase().includes(inputText.toLowerCase()) ||
      tip.tags.some(tag => tag.toLowerCase().includes(inputText.toLowerCase()))
    );
    if (searchResults.length > 0) {
      newState.tipIndex = tips.indexOf(searchResults[0]);
    }
  }

  const currentTip = tips[newState.tipIndex];

  return {
    image: `https://securitywithsisi.vercel.app/tips/${currentTip.id}.png`,
    buttons: [
      {
        label: "Previous Tip",
        action: "post"
      },
      {
        label: "Next Tip",
        action: "post"
      },
      {
        label: "Share Tip",
        action: "post"
      }
    ],
    state: JSON.stringify(newState),
    message
  };
} 