import React, { FC } from 'react'

export interface ISearchProps {
    value: string;
    onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<ISearchProps> = ({value, onChangeText}) => {
  return (
    <div>
        <input type="text" value={value} onChange={onChangeText} placeholder="Search" />
    </div>
  )
}

export default SearchInput
