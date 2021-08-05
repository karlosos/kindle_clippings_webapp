import React from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const BooksList = () => {
  // TODO: this is slow in my opinion and too complicated
  // firstly the list of quotes is created then quotes are reduced to dictionary of books
  // and finally dictionary of books is transformed into list of books
  const books = useSelector((state) => {
    const quotes = Object.entries(state.clippings.quotes).reverse().map(q => (
      {
        id: q[0],
        book: q[1].book,
        author: q[1].author,
        quote: q[1].quote,
        time: q[1].time,
        location: q[1].location,
        favourite: q[1].favourite
      }
    ))

    const booksDict = quotes.reduce((res, { book, author, time }) => {
      const count = res[book]?.numHighlights + 1 || 1
      res[book] = {
        book: book,
        author: author,
        lastHighlights: time,
        numHighlights: count
      }
      return res
    }, {})

    console.log(booksDict)

    const booksList = Object.entries(booksDict).map((book, index) => (
      {
        id: index,
        title: book[1].book,
        author: book[1].author,
        lastHighlights: book[1].lastHighlights,
        numHighlights: book[1].numHighlights
      }
    ))

    console.log(booksList)
    return (booksList)
  })

  return (
    <BooksContainer>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </BooksContainer>
  )
}

export default BooksList
