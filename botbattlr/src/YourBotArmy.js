import React from 'react';
import Bot from './Bot';

function YourBotArmy({ onRelease, bots }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onRelease={onRelease} />
      ))}
    </div>
  );
}

export default YourBotArmy;
