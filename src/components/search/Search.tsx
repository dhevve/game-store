import SearchInput from './SearchInput'
import React, { FC, useState } from 'react'
import {IArr} from "../../types/Arr"
import CardGame from "../games/game-card/CardGame"


interface SearchProps {
    games: IArr[],
}

const Search: FC<SearchProps> = ({games}) => {
    const [value, setValue] = useState<string>("")

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    const filtred = games.filter(game => {
        return game.name.toLowerCase().includes(value.toLowerCase());
    })
  return (
      <>
        <SearchInput value={value} onChangeText={onChangeText}/>
            {filtred.map((game) => (
                <CardGame key={game.name} name={game.name} price={game.price}/>
            ))}
      </>
  )
}

export default Search