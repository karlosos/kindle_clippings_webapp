import React from 'react'
import styled from 'styled-components'
import { Button, Statistic, Icon } from 'semantic-ui-react'

const Row = styled.div`
    padding: 8px;
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
    // justify-content: space-between;
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

const BookItem = ({ book }) => {
  return (
    <Row>
      <RowGroup>
        <Icon name='book' size='big' />
        <BookInfo>
          <Title>
            {book.title}
          </Title>
          <Author>
            {book.author}
          </Author>
        </BookInfo>
        <LastHighlight>
          <Statistic size='mini'>
            <Statistic.Label>Last highlighted</Statistic.Label>
            <Statistic.Value>{book.lastHighlights}</Statistic.Value>
          </Statistic>
        </LastHighlight>
        <NumHighlights>
          <Statistic size='mini'>
            <Statistic.Label>Highlights</Statistic.Label>
            <Statistic.Value>{book.numHighlights}</Statistic.Value>
          </Statistic>
        </NumHighlights>
      </RowGroup>
      <RowGroup>
        <Button style={{ marginRight: '32px' }}>Export</Button>
        <StyledIcon circular name='angle right' size='large' />
      </RowGroup>
    </Row>
  )
}

export default BookItem
