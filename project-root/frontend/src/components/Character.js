import React from 'react';

const Character = ({ emotion }) => {
  const emotionImage = `./assets/emotions/${emotion}.png`;

  return (
    <div>
      <img src={emotionImage} alt="Character" />
    </div>
  );
};

export default Character;
