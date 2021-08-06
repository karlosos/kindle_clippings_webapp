import { createSlice } from '@reduxjs/toolkit'

export const highlightsPaginationSlice = createSlice({
  name: 'highlightsPagination',
  initialState: {
    activePage: 1
  },
  reducers: {
    setActivePage: (state, action) => {
        state.activePage = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setActivePage } = highlightsPaginationSlice.actions

export default highlightsPaginationSlice.reducer
