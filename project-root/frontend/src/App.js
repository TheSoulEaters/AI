import React, { useState } from 'react';
import Character from './components/Character';
import EmotionIndicator from './components/EmotionIndicator';
import ChatBox from './components/ChatBox';

const App = () => {
  const [emotion, setEmotion] = useState('neutral');

  return (
    <div>
      <h1>AI VTuber Assistant</h1>
      <Character emotion={emotion} />
      <EmotionIndicator emotion={emotion} />
      <ChatBox setEmotion={setEmotion} />
    </div>
  );
};

export default App;
