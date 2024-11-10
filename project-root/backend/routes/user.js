const express = require('express');
const router = express.Router();

// Endpoint untuk mengambil data pengguna
router.get('/', (req, res) => {
  res.json({ message: 'User data' });
});

module.exports = router;
