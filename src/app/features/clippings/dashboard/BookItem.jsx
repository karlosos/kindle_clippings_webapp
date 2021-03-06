import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Statistic } from 'semantic-ui-react';

import { setActiveSidebarItem } from '../../../layout/sidebar/sidebarSlice';
import {
    Author,
    BookInfo,
    LastHighlight,
    NumHighlights,
    Row,
    RowGroup,
    StatisticLabel,
    StatisticValue,
    StyledIcon,
    Title,
} from './BookItem.style';
import bookExport from './bookExport';

dayjs.extend(relativeTime);

const BookItem = ({ book }) => {
    const store = useStore();
    const dispatch = useDispatch();

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

    return (
        <Row>
            <RowGroup>
                <Icon name="book" size="big" />
                <Link
                    to={`/highlights/${book.title}`}
                    onClick={() =>
                        dispatch(setActiveSidebarItem(book.id.toString()))
                    }
                >
                    <BookInfo>
                        <Title>{book.title}</Title>
                        <Author>{book.author}</Author>
                    </BookInfo>
                </Link>
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
                    <StyledIcon circular name="angle right" size="large" />
                </Link>
            </RowGroup>
        </Row>
    );
};

export default BookItem;
