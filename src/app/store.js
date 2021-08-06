import { configureStore } from '@reduxjs/toolkit'
import clippingsReducer from '../clippings/clippingsSlice'
import highlightsPaginationReducer from '../clippings/HighlightsPage/highlightsPaginationSlice'
import sidebarReducer from './Layout/Sidebar/sidebarSlice'
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
