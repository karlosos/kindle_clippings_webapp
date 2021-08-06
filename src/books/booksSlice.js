import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: []
  },
  reducers: {
    concat: (state, action) => {
      state.books = { ...state.books, ...action.payload }
    },
    clear: (state) => {
      state.books = {}
    },
  }
})

// Action creators are generated for each case reducer function
export const { concat, clear } = booksSlice.actions

export default booksSlice.reducer
