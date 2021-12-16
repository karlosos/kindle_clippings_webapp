import React, { useState } from 'react'
import BookItem from './BookItem'
import { useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import { BooksContainer, PaginationWrapper, Wrapper } from './BooksList.style'


const BooksList = () => {
  const books = useSelector((state) => state.clippings.books)
  const [activePage, setActivePage] = useState(1)

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
