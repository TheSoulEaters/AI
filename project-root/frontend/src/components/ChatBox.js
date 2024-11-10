import React, { useState } from 'react';
import axios from 'axios';

const ChatBox = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [emotion, setEmotion] = useState('neutral');

  const handleChat = async () => {
    const res = await axios.post('http://localhost:5000/api/nlp/process', { text });
    setResponse(res.data.response);
    setEmotion(res.data.emotion);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleChat}>Send</button>
      <p>{response}</p>
      <h2>Emotion: {emotion}</h2>
    </div>
  );
};

export default ChatBox;
