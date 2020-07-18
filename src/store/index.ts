import rootReducer, { initialState } from './reducers'
import { createStore } from 'redux'
import { useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { State, GameStatus, Cards } from './types'

const store = createStore(rootReducer, initialState, composeWithDevTools())

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

export const useStore = (): State => {
  return {
    status: useSelector<State, GameStatus>((state) => state.status),
    cards: useSelector<State, Cards>((state) => state.cards),
    size: useSelector<State, number>((state) => state.size),
    tries: useSelector<State, number>((state) => state.tries),
    found: useSelector<State, number>((state) => state.found),
    currentPair: useSelector<State, string[]>((state) => state.currentPair)
  }
}

export * from './actions'

export { useDispatch } from 'react-redux'

export default store
