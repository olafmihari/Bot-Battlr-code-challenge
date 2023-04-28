import React from 'react';
import Bot from './Bot';

function BotCollection({ onEnlist, bots }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onEnlist={onEnlist} />
      ))}
    </div>
  );
}

export default BotCollection;
