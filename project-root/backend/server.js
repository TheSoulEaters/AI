const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const nlpRoutes = require('./routes/nlp');
const ttsRoutes = require('./routes/tts');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/nlp', nlpRoutes);
app.use('/api/tts', ttsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
