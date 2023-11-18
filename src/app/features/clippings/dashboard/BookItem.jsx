import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Statistic } from 'semantic-ui-react';
import { ChevronsRightIcon } from 'lucide-react';

import { setActiveSidebarItem } from '../../../layout/sidebar/sidebarSlice';
import {
    Author,
    BookIcon,
    BookInfo,
    Chevron,
    LastHighlight,
    NumHighlights,
    Row,
    RowGroup,
    StatisticLabel,
    StatisticValue,
    Title,
} from './BookItem.style';
import bookExport from './bookExport';

dayjs.extend(relativeTime);

const BookItem = ({ book }) => {
    const store = useStore();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleExportClick = () => {
        // TODO: change to useSelector to select all highlights for fiven book title
        const allQuotes = store.getState().clippings.quotes;
        const highlights = Object.entries(allQuotes).filter((q) => {
            const deletedFilter = q[1].deleted === false;
            const titleFilter = q[1].book === book.title;
            return deletedFilter && titleFilter;
        });
        bookExport(highlights);
    };

    const handleNavigateBook = () => {
        dispatch(setActiveSidebarItem(book.id.toString()))
        navigate(`/highlights/${book.title}`);
    }

    return (
        <Row>
            <RowGroup>
                <BookIcon src="./icons/book-large.svg" alt='book icon' />
                <BookInfo onClick={handleNavigateBook}>
                    <Title>{book.title}</Title>
                    <Author>{book.author}</Author>
                </BookInfo>
                <LastHighlight>
                    <Statistic size="mini">
                        <StatisticValue>
                            {dayjs(book.lastHighlights).fromNow()}
                        </StatisticValue>
                        <StatisticLabel>Last highlighted</StatisticLabel>
                    </Statistic>
                </LastHighlight>
                <NumHighlights>
                    <Statistic size="mini">
                        <StatisticValue>{book.numHighlights}</StatisticValue>
                        <StatisticLabel>Highlights</StatisticLabel>
                    </Statistic>
                </NumHighlights>
            </RowGroup>
            <RowGroup>
                <Button
                    style={{ marginRight: '32px' }}
                    onClick={handleExportClick}
                >
                    Export
                </Button>
                <Link to={`/highlights/${book.id}/${book.title}`}>
                    <Chevron>
                        <ChevronsRightIcon />
                    </Chevron>
                </Link>
            </RowGroup>
        </Row>
    );
};

export default BookItem;
