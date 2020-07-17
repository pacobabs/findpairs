import { Action, ActionTypes , Card} from '@store/types'

export const setCards = (cards: Card[]): Action => ({
  type: ActionTypes.setCards,
  payload: cards
})

export const setSize = (size: number): Action => ({
  type: ActionTypes.setSize,
  payload: size
})

export const setTries = (tries: number): Action => ({
  type: ActionTypes.setTries,
  payload: tries
})

export const setFound = (found: number): Action => ({
  type: ActionTypes.setFound,
  payload: found
})
