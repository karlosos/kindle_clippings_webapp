import { configureStore } from '@reduxjs/toolkit'
import clippingsReducer from '../clippings/clippingsSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = loadState()

const store = configureStore({
  reducer: {
    clippings: clippingsReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveState({
    clippings: store.getState().clippings
  })
})

export default store
