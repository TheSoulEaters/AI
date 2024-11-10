const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

// Endpoint untuk memproses teks
router.post('/process', (req, res) => {
    const { text } = req.body;

    // Menjalankan skrip Python (nlp.py) untuk memproses teks
    exec(`python backend/api/nlp.py "${text}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing text');
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send('Error processing text');
        }
        
        // Parsing hasil dari Python
        const result = JSON.parse(stdout);
        res.json(result);
    });
});

module.exports = router;
