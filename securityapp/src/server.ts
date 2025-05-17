import express, { Request, Response } from 'express';
import cors from 'cors';
import { handleFrameAction } from './api/frame';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/frame', async (req: Request, res: Response) => {
  try {
    const { action, buttonIndex, inputText, state } = req.body;
    const result = await handleFrameAction(action, buttonIndex, inputText, state);
    res.json(result);
  } catch (error) {
    console.error('Frame action error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 