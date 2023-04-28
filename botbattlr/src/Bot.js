import React from 'react';

function Bot({ bot, onEnlist }) {
  const handleClick = () => {
    onEnlist(bot);
  };

  return (
    <div className="ui column">
      <div className="ui card">
        <div className="image">
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="meta">{bot.bot_class}</div>
          <div className="description">{bot.catchphrase}</div>
        </div>
        <div className="extra content">
          <button className="ui button" onClick={handleClick}>
            Enlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bot;
