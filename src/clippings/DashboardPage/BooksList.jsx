import React, { useState } from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'

const Wrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: overlay;
`

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    *:last-child {
      margin-bottom: 0;
    }
`

const PaginationWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: white;
  padding-right: 16px;
  box-shadow: -16px -1px 0 rgba(0, 0, 0, 0.2);
  user-select: none;
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
    <Wrapper>
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
    </Wrapper>
  )
}

export default BooksList
