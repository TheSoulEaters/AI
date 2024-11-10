
const express = require('express');
const router = express.Router();
const { text_to_speech } = require('../api/tts');

router.post('/speak', (req, res) => {
  const { text } = req.body;
  text_to_speech(text);
  res.json({ message: 'Speaking: ' + text });
});

module.exports = router;
