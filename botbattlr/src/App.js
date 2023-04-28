import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  function handleEnlist(bot) {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }

  function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function handleDischarge(id) {
    fetch(`http://localhost:3000/bots/${id}`, { method: 'DELETE' })
      .then(() => setBots(bots.filter((bot) => bot.id !== id)))
      .catch((error) => console.error(error));

    setArmy(army.filter((bot) => bot.id !== id));
  }

  return (
    <div>
      <BotCollection bots={bots} onEnlist={handleEnlist} />
      <YourBotArmy bots={army} onRelease={handleRelease} onDischarge={handleDischarge} />
    </div>
  );
}

export default App;
