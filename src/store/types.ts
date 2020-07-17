
export type State = {
  cards: Card[]
  size: number
  tries: number
  found: number
}

export type Card = {
  image: string
}

// actions
export enum ActionTypes {
  setCards = 'cards/set',
  setSize = 'size/set',
  setTries = 'tries/set',
  setFound = 'found/set',
}

export type Action = MapPayload<{
  [ActionTypes.setCards]: Card[]
  [ActionTypes.setSize]: number
  [ActionTypes.setTries]: number
  [ActionTypes.setFound]: number
}>

export type ActionCreators = {
  setCards: (c: Card[]) => Action
  setSize: (s: number) => Action
  setTries: (t: number) => Action
  setFound: (f: number) => Action
}

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
