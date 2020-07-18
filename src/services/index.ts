import { useEffect } from 'react'
import {
  useStore,
  useDispatch,
  setGameStatus,
  setCards,
  toggleCard,
  newTry,
  pairFound,
  hidePair,
  turnCards
} from '@store'
import { Cards, GameStatus } from '@store/types'
import { Dispatch } from 'redux'

export const tryCard = (dispatch: Dispatch, id: string, value: string, currentPair: string[]) => {
  dispatch(toggleCard(id))
  dispatch(newTry(value))
  if (currentPair.length) {
    dispatch(setGameStatus(GameStatus.checking))
    setTimeout(() => {
      if (currentPair.includes(value)) {
        dispatch(pairFound())
        dispatch(hidePair(value))
      }
      dispatch(turnCards(true))
      dispatch(setGameStatus(GameStatus.try))
    }, 1000)
  }
}

export const useGame = () => {
  const { size } = useStore()
  const { height, rows, cols } = getGrid(size)
  useShowNewCardsBriefly()
  return { height, rows, cols }
}

const useShowNewCardsBriefly = () => {
  const { size, status } = useStore()
  const dispatch = useDispatch()
  useEffect(() => {
    let timeout: number
    if (status === GameStatus.starting) {
      const cards = getRandomCards(size)
      dispatch(setCards(cards))
      timeout = setTimeout(() => {
        dispatch(turnCards(true))
        dispatch(setGameStatus(GameStatus.try))
      }, 3600)
    }
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [status])
}

const getRandomCards = (size: number) => {
  let indexes = Array(size * 2)
    .fill(0)
    .map((_, index) => index) // Fill an array with its indexes]
  const cards: Cards = {}
  const values: string[] = []
  for (let i = 0; i < size; i++) {
    let value = '0'
    while (value === '0' || values.includes(value)) {
      // until not picked
      value = String(Math.floor(Math.random() * 50) + 1)
    }
    values.push(value) // mark as picked
    const [index1, index2] = [getRandomArrayIndex(indexes), getRandomArrayIndex(indexes)] // get two available indexes
    const cardDefault = {
      turned: false,
      visible: true
    }
    cards[index1] = {
      value,
      ...cardDefault
    }
    cards[index2] = {
      value,
      ...cardDefault
    }
  }
  return cards
}

const getRandomArrayIndex = (indexes: number[]) => {
  var index = Math.floor(Math.random() * indexes.length)
  return indexes.splice(index, 1)[0] // return initial array index
}

const getGrid = (size: number) => {
  let cols = 4 // taking in account antd grid is 24 columns.
  let rows = 4
  let height = '9em'
  if (size === 6) {
    cols = 4
    rows = 3
  }
  if (size === 8) {
    cols = 4
    rows = 4
  }
  if (size === 10) {
    cols = 4
    rows = 5
  }
  if (size === 12) {
    cols = 6
    rows = 4
    height = '8em'
  }
  if (size === 15) {
    cols = 6
    rows = 5
    height = '8em'
  }
  if (size === 18) {
    rows = 6
    cols = 6
    height = '7em'
  }
  if (size === 21) {
    cols = 6
    rows = 7
    height = '7em'
  }
  return { height, rows, cols }
}
