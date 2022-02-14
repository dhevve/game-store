import React, { FC, useState } from 'react';
import {IArr} from "./types/Arr"

const App: FC = () => {
  const [games, setGames] = useState<IArr[]>([
    {name: "PUBG", price: 30},
    {name: "The witcher 3", price: 30},
  ])

  const handler = () => {
    const newGame = {
      name: "cs:go",
      price: 0,
    }
    setGames(prev => [newGame, ...prev])
  }

  return (
    <div className="App">
      <button onClick={handler}>click</button>
      {games.map((game) => (
        <li key={game.name}>{game.name} {game.price}$</li>
      ))}
    </div>
  );
}

export default App;
