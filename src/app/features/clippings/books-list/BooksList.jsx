import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react';

import BookItem from './BookItem';
import { BooksContainer, PaginationWrapper, Wrapper } from './BooksList.style';

const BooksList = () => {
    const wrapperRef = useRef();

    const books = useSelector((state) => state.clippings.books);

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;

    const itemsPerPage = 20;
    const numPages = Math.ceil(books.length / itemsPerPage);
    const booksFiltered = books.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
    );

    // eslint-disable-next-line no-shadow
    const handlePaginationChange = (e, { activePage }) => {
        setSearchParams({
            page: activePage,
        });
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
                    activePage={page}
                    onPageChange={handlePaginationChange}
                    totalPages={numPages}
                />
            </PaginationWrapper>
        </Wrapper>
    );
};

export default BooksList;
