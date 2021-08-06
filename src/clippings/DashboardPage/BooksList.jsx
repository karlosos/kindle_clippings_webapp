import React, { useState } from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const BooksList = () => {
  const books = useSelector((state) => state.clippings.books)
  const [activePage, setActivePage] = useState(1)

  // pagination
  const itemsPerPage = 20
  const numPages = useSelector((state) => Math.ceil(books.length / itemsPerPage))
  const booksFiltered = books.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <BooksContainer>
        {booksFiltered.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </BooksContainer>
      <PaginationWrapper>
        <Pagination
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={numPages}
        />
      </PaginationWrapper>
    </>
  )
}

export default BooksList
