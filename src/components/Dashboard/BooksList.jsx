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
    const quotes = Object.entries(state.clippings.quotes).map(q => (
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
  // const books = [
  //   {
  //     id: '1',
  //     title: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, too',
  //     author: 'Gabriel Wynver',
  //     lastHighlights: '2 month ago',
  //     numHighlights: '16'
  //   },
  //   {
  //     id: '2',
  //     title: 'Homo Deus: A Bried History of Tomorrow',
  //     author: 'Charles Conrad',
  //     lastHighlights: '1 month ago',
  //     numHighlights: '32'
  //   },
  //   {
  //     id: '3',
  //     title: 'Fluent Forever: How to Learn Any Language Fast and Never Forget It',
  //     author: 'Gabriel Wynver',
  //     lastHighlights: '1 month ago',
  //     numHighlights: '42'
  //   },
  //   {
  //     id: '4',
  //     title: 'Essentialism: The Disciplined Pursuit of Less',
  //     author: 'Frank Basten',
  //     lastHighlights: '1 week ago',
  //     numHighlights: '42'
  //   }
  // ]

  return (
    <BooksContainer>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </BooksContainer>
  )
}

export default BooksList
