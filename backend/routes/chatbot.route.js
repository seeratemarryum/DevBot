import express from 'express';
import User from '../models/user.model.js';
import { Message } from '../controllers/chatbot.message.js';  // ⬅️ import your Message controller

const router = express.Router();

// Vulnerable admin route (no authentication!)
router.get('/admin/messages', async (req, res) => {
  try {
    const allMessages = await User.find(); // fetch all user messages
    res.status(200).json(allMessages);
  } catch (err) {
    console.error("❌ Error fetching messages:", err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ User sends a message
router.post('/message', Message);

export default router;
