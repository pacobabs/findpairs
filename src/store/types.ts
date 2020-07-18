export type State = {
  status: GameStatus
  cards: Cards
  size: number
  tries: number
  found: number
  currentPair: string[]
}

export enum GameStatus {
  starting = 'game/starting',
  started = 'game/started',
  try = 'game/try',
  checking = 'game/try/checking',
  ended = 'game/ended'
}

export type Card = {
  value: string
  turned: boolean
  visible: boolean
}

export type Cards = {
  [id: string]: Card
}

// actions
export enum ActionTypes {
  setGameStatus = 'game/set',
  restart = 'game/restart',
  newTry = 'game/try',
  pairFound = 'game/found',
  setCards = 'cards/set',
  turnCards = 'cards/turn',
  toggleCard = 'card/toggle',
  hidePair = 'card/hide',
  setSize = 'size/set'
}

export type Action = MapPayload<{
  [ActionTypes.setGameStatus]: GameStatus
  [ActionTypes.restart]: undefined
  [ActionTypes.newTry]: string
  [ActionTypes.pairFound]: undefined
  [ActionTypes.setCards]: Cards
  [ActionTypes.turnCards]: boolean
  [ActionTypes.toggleCard]: string
  [ActionTypes.hidePair]: string
  [ActionTypes.setSize]: number
}>

// Utulity types

type MapPayload<Payload> = Map<Payload>[keyof Map<Payload>]

type Map<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
