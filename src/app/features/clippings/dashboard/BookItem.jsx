import React from "react";
import { Button, Statistic, Icon } from "semantic-ui-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import bookExport from "./bookExport";

import { useStore } from "react-redux";
import {
  Author,
  BookInfo,
  LastHighlight,
  NumHighlights,
  Row,
  RowGroup,
  StatisticLabel,
  StyledIcon,
  Title,
} from "./BookItem.style";

dayjs.extend(relativeTime);

const BookItem = ({ book }) => {
  const store = useStore();
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
        <Link to={`/highlights/${book.id}/${book.title}`}>
          <BookInfo>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
          </BookInfo>
        </Link>
        <LastHighlight>
          <Statistic size="mini">
            <Statistic.Value>
              {dayjs(book.lastHighlights).fromNow()}
            </Statistic.Value>
            <StatisticLabel>Last highlighted</StatisticLabel>
          </Statistic>
        </LastHighlight>
        <NumHighlights>
          <Statistic size="mini">
            <Statistic.Value>{book.numHighlights}</Statistic.Value>
            <StatisticLabel>Highlights</StatisticLabel>
          </Statistic>
        </NumHighlights>
      </RowGroup>
      <RowGroup>
        <Button style={{ marginRight: "32px" }} onClick={handleExportClick}>
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
