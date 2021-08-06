import React from 'react'
import styled from 'styled-components'
import { Button, Statistic, Icon } from 'semantic-ui-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Colors from '../../common/colors'
import { Link } from "react-router-dom";

dayjs.extend(relativeTime)

const Row = styled.div`
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 4px;
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const RowGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const BookInfo = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 70px;
    justify-content: center;
`

const Title = styled.div`
    font-weight: bold;
`

const Author = styled.div`

`

const LastHighlight = styled.div`
    margin-left: 24px;
    width: 13rem;
`

const NumHighlights = styled.div`
    margin-left: 24px;
    width: 13rem;
`

const StyledIcon = styled(Icon)`
  &:hover {
      cursor: pointer;
      color: rgb(0 0 0 / 70%);
      box-shadow: 0 0 0 0.1em rgb(0 0 0 / 70%) inset !important;
  }
`

const StatisticLabel = styled(Statistic.Label)`
  &&& {
      font-size: 12px;
      color: ${Colors.textLighter};
  }
`

const BookItem = ({ book }) => {
  return (
    <Row>
        <RowGroup>
          <Icon name='book' size='big' />
          <Link to={`/highlights/${book.id}/${book.title}`}>
          <BookInfo>
            <Title>
              {book.title}
            </Title>
            <Author>
              {book.author}
            </Author>
          </BookInfo>
          </Link>
          <LastHighlight>
            <Statistic size='mini'>
              <Statistic.Value>{dayjs(book.lastHighlights).fromNow()}</Statistic.Value>
              <StatisticLabel>Last highlighted</StatisticLabel>
            </Statistic>
          </LastHighlight>
          <NumHighlights>
            <Statistic size='mini'>
              <Statistic.Value>{book.numHighlights}</Statistic.Value>
              <StatisticLabel>Highlights</StatisticLabel>
            </Statistic>
          </NumHighlights>
        </RowGroup>
      <RowGroup>
        <Button style={{ marginRight: '32px' }}>Export</Button>
        <Link to={`/highlights/${book.id}/${book.title}`}>
          <StyledIcon circular name='angle right' size='large' />
        </Link>
      </RowGroup>
    </Row>
  )
}

export default BookItem
