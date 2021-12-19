import Fuse from 'fuse.js';
import { throttle } from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Input, Menu } from 'semantic-ui-react';

import QuickLinksItem from './QuickLinksItem';
import {
    BooksList,
    BooksSectionMenu,
    BooksSectionWrapper,
} from './Sidebar.style';

const initialData = (books) =>
    books.slice(0, 5).map((book) => ({ item: book }));

const BooksSection = ({ handleItemClick, activeItem }) => {
    const books = useSelector((state) => state.clippings.books);

    const fuse = useRef(
        new Fuse(books, {
            includeScore: true,
            keys: ['title', 'author'],
        }),
    );

    const [searchData, setSearchData] = useState(initialData(books));

    useEffect(() => {
        setSearchData(initialData(books));
        fuse.current = new Fuse(books, {
            includeScore: true,
            keys: ['title', 'author'],
        });
    }, [books]);

    // eslint-disable-next-line no-shadow
    const searchBooks = (query, books) => {
        // Books were old because we used Memo!
        // To have the most recent books props we need to pass them as an argument
        // or probably store them in ref
        if (!query) {
            setSearchData(initialData(books));
            return;
        }

        const result = fuse.current.search(query);
        setSearchData(result);
    };

    const throttledSearch = useMemo(() => throttle(searchBooks, 300), []);

    return (
        <BooksSectionWrapper>
            <BooksSectionMenu>
                <Menu.Item key="searchInput">
                    <Input
                        icon={{ name: 'search', circular: true, link: true }}
                        placeholder="Search book"
                        onChange={(e) => throttledSearch(e.target.value, books)}
                    />
                </Menu.Item>
                <BooksList>
                    {searchData.map((searchItem) => {
                        const book = searchItem.item;

                        return (
                            <Link
                                to={`/highlights/${book.id}/${book.title}`}
                                key={book.id}
                            >
                                <QuickLinksItem
                                    name={book.id}
                                    handleItemClick={handleItemClick}
                                    activeItem={activeItem}
                                >
                                    <Icon
                                        name="book"
                                        style={{ float: 'left' }}
                                    />{' '}
                                    {book.title}
                                </QuickLinksItem>
                            </Link>
                        );
                    })}
                </BooksList>
                <Menu.Item key="allBooksLink">
                    <Link to="/dashboard">Show all books</Link>
                </Menu.Item>
            </BooksSectionMenu>
        </BooksSectionWrapper>
    );
};

export default BooksSection;
