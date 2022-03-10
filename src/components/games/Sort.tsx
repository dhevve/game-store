import React, { FC } from 'react'
import { IArr } from '../../types/Arr'
import Button from '../UI/Button'

interface SortProps {
    year: boolean | undefined,
    cost: boolean | undefined,
    filtred: IArr[],
    setGamesList: any,
    setCost: any,
    setYear: any
}

const Sort: FC<SortProps> = ({year, cost, filtred, setCost, setGamesList, setYear}) => {
    const sortCost = () => {
        if(cost === true) {
          setGamesList(filtred.sort((a, b) => a.price > b.price ? 1 : -1))
          setCost(false)
        } else {
          setGamesList(filtred.sort((a, b) => a.price < b.price ? 1 : -1))
          setCost(true)
        }
      }
      const sortYear = () => {
        if(year === true) {
          setGamesList(filtred.sort((a, b) => a.year > b.year ? 1 : -1))
          setYear(false)
        } else {
          setGamesList(filtred.sort((a, b) => a.year < b.year ? 1 : -1))
          setYear(true)
        }
      }

  return (
      <>
        <Button onClick={sortYear}>{year ? "year↓" : "year↑"}</Button>
        <Button onClick={sortCost}>{cost ? "cost↓" : "cost↑"}</Button>
      </>
  )
}

export default Sort