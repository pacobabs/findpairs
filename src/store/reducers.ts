import { State, Action, ActionTypes, GameStatus } from './types'

export const initialState = {
  status: GameStatus.starting,
  cards: {},
  size: 8,
  tries: 0,
  found: 0,
  currentPair: []
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.setGameStatus: {
      return {
        ...state,
        status: action.payload
      }
    }
    case ActionTypes.setCards: {
      return {
        ...state,
        cards: action.payload
      }
    }
    case ActionTypes.turnCards: {
      return {
        ...state,
        cards: Object.keys(state.cards).reduce((cards, id) => {
          return {
            ...cards,
            [id]: {
              ...state.cards[id],
              turned: action.payload
            }
          }
        }, {})
      }
    }
    case ActionTypes.toggleCard: {
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload]: {
            ...state.cards[action.payload],
            turned: !state.cards[action.payload].turned
          }
        }
      }
    }
    case ActionTypes.hidePair: {
      return {
        ...state,
        cards: Object.entries(state.cards).reduce((cards, [id, { value }]) => {
          return {
            ...cards,
            [id]: {
              ...state.cards[id],
              visible: value === action.payload ? false : state.cards[id].visible
            }
          }
        }, {})
      }
    }
    case ActionTypes.setSize: {
      return {
        ...state,
        size: action.payload
      }
    }
    case ActionTypes.newTry: {
      return {
        ...state,
        currentPair: state.currentPair.length ? [] : [...state.currentPair, action.payload],
        tries: state.currentPair.length ? state.tries + 1 : state.tries
      }
    }
    case ActionTypes.pairFound: {
      return {
        ...state,
        found: state.found + 1
      }
    }
    case ActionTypes.restart: {
      return { ...initialState, size: state.size }
    }
    default:
      return state
  }
}

export default reducer
