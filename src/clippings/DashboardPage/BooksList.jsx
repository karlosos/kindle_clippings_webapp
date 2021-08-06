import React from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const BooksList = () => {
  const books = useSelector((state) => state.clippings.books)
  
  return (
    <BooksContainer>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </BooksContainer>
  )
}

export default BooksList
