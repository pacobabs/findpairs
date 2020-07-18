import { Action, ActionTypes, Cards, GameStatus } from '@store/types'

export const setGameStatus = (status: GameStatus): Action => ({
  type: ActionTypes.setGameStatus,
  payload: status
})

export const restart = (): Action => ({
  type: ActionTypes.restart
})

export const setCards = (cards: Cards): Action => ({
  type: ActionTypes.setCards,
  payload: cards
})

export const turnCards = (turn: boolean): Action => ({
  type: ActionTypes.turnCards,
  payload: turn
})

export const toggleCard = (id: string): Action => ({
  type: ActionTypes.toggleCard,
  payload: id
})

export const hidePair = (value: string): Action => ({
  type: ActionTypes.hidePair,
  payload: value
})

export const setSize = (size: number): Action => ({
  type: ActionTypes.setSize,
  payload: size
})

export const newTry = (id: string): Action => ({
  type: ActionTypes.newTry,
  payload: id
})

export const pairFound = (): Action => ({
  type: ActionTypes.pairFound
})
