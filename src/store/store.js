import { configureStore } from '@reduxjs/toolkit'
import clippingsReducer from './clippingsSlice'
import highlightsPaginationReducer from './highlightsPaginationSlice'
import sidebarReducer from './sidebarSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = loadState()

const store = configureStore({
  reducer: {
    clippings: clippingsReducer,
    highlightsPagination: highlightsPaginationReducer,
    sidebar: sidebarReducer,
  },
  preloadedState
})

store.subscribe(() => {
  saveState({
    clippings: store.getState().clippings
  })
})

export default store
