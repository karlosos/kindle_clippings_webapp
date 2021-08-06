import { createSlice } from '@reduxjs/toolkit'

export const clippingsSlice = createSlice({
  name: 'clippings',
  initialState: {
    quotes: {}
  },
  reducers: {
    concat: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.quotes = { ...state.quotes, ...action.payload }
    },
    clear: (state) => {
      console.log('Clear quotes')
      state.quotes = {}
    },
    toggleFavourite: (state, action) => {
      const id = action.payload
      state.quotes[id].favourite = !state.quotes[id].favourite
    }
  }
})

// Action creators are generated for each case reducer function
export const { concat, clear, toggleFavourite } = clippingsSlice.actions

export default clippingsSlice.reducer
