import { configureStore } from '@reduxjs/toolkit'
import clippingsReducer from './clippingsSlice'
import highlightsPaginationReducer from './highlightsPaginationSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = loadState()

const store = configureStore({
  reducer: {
    clippings: clippingsReducer,
    highlightsPagination: highlightsPaginationReducer,
  },
  preloadedState
})

store.subscribe(() => {
  saveState({
    clippings: store.getState().clippings
  })
})

export default store
