import { State, Action, ActionTypes } from './types'

export const initialState = {
  cards: [],
  size: 8,
  tries: 0,
  found: 0
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.setCards: {
      return {
        ...state,
        cards: action.payload
      }
    }
    case ActionTypes.setSize: {
      return {
        ...state,
        size: action.payload
      }
    }
    case ActionTypes.setTries: {
      return {
        ...state,
        tries: action.payload
      }
    }
    case ActionTypes.setFound: {
      return {
        ...state,
        found: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
