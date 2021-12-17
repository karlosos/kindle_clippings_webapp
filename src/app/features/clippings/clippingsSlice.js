import { createSlice } from "@reduxjs/toolkit";

export const clippingsSlice = createSlice({
  name: "clippings",
  initialState: {
    quotes: {},
    books: [],
  },
  reducers: {
    concat: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // set new quotes
      state.quotes = { ...state.quotes, ...action.payload };
      state.books = booksListFromQuotes(state.quotes);
    },
    clear: (state) => {
      state.quotes = {};
      state.books = [];
    },
    toggleFavourite: (state, action) => {
      const id = action.payload;
      state.quotes[id].favourite = !state.quotes[id].favourite;
    },
    toggleDeleted: (state, action) => {
      const id = action.payload;
      state.quotes[id].deleted = !state.quotes[id].deleted;
    },
    loadBackup: (state, action) => {
      state.quotes = action.payload;
      state.books = booksListFromQuotes(state.quotes);
    },
  },
});

function booksListFromQuotes(quotes) {
  if (!quotes) {
    return [];
  }

  const quotesList = Object.entries(quotes)
    .reverse()
    .map((q) => ({
      id: q[0],
      book: q[1].book,
      author: q[1].author,
      quote: q[1].quote,
      time: q[1].time,
      location: q[1].location,
      favourite: q[1].favourite,
      deleted: q[1].deleted,
    }));

  const booksDict = quotesList.reduce((res, { book, author, time }) => {
    const count = res[book]?.numHighlights + 1 || 1;
    res[book] = {
      book: book,
      author: author,
      lastHighlights: time,
      numHighlights: count,
    };
    return res;
  }, {});

  const booksList = Object.entries(booksDict).map((book, index) => ({
    id: index,
    title: book[1].book,
    author: book[1].author,
    lastHighlights: book[1].lastHighlights,
    numHighlights: book[1].numHighlights,
  }));

  return booksList;
}

// Action creators are generated for each case reducer function
export const { concat, clear, toggleFavourite, toggleDeleted, loadBackup } =
  clippingsSlice.actions;
export { booksListFromQuotes };
export default clippingsSlice.reducer;
