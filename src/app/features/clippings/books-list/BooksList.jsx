import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'semantic-ui-react';

import BookItem from './BookItem';
import { BooksContainer, PaginationWrapper, Wrapper } from './BooksList.style';

const BooksList = () => {
    const wrapperRef = useRef();

    const books = useSelector((state) => state.clippings.books);
    const [activePage, setActivePage] = useState(1);

    const itemsPerPage = 20;
    const numPages = Math.ceil(books.length / itemsPerPage);
    const booksFiltered = books.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage,
    );

    // eslint-disable-next-line no-shadow
    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
        wrapperRef.current.scrollTo(0, 0);
    };

    return (
        <Wrapper ref={wrapperRef}>
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
    );
};

export default BooksList;
