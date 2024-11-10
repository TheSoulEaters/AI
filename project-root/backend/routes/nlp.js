const express = require('express');
const router = express.Router();
const { detect_emotion, generate_response } = require('../api/nlp');

// Endpoint untuk memproses teks
router.post('/process', (req, res) => {
  const { text } = req.body;
  const emotion = detect_emotion(text);
  const response = generate_response(text);

  res.json({ emotion, response });
});

module.exports = router;
