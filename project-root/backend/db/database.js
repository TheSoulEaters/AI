const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ai_vtuber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Database connection error: ', err);
});
