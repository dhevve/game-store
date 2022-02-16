import React, { FC } from 'react'
import style from "./searchInput.module.scss"

export interface ISearchProps {
    value: string;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<ISearchProps> = ({value, onChangeText}) => {
  return (
    <div>
        <input className={style.input} type="text" value={value} onChange={onChangeText} placeholder="Search" />
    </div>
  )
}

export default SearchInput
