import styled from 'styled-components'
import Colors from '../../../layout/colors'
import { Statistic, Icon } from 'semantic-ui-react'

export const Row = styled.div`
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

export const RowGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BookInfo = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 70px;
    justify-content: center;
`

export const Title = styled.div`
    font-weight: bold;
`

export const Author = styled.div`

`

export const LastHighlight = styled.div`
    margin-left: 24px;
    width: 13rem;
`

export const NumHighlights = styled.div`
    margin-left: 24px;
    width: 13rem;
`

export const StyledIcon = styled(Icon)`
  &:hover {
      cursor: pointer;
      color: rgb(0 0 0 / 70%);
      box-shadow: 0 0 0 0.1em rgb(0 0 0 / 70%) inset !important;
  }
`

export const StatisticLabel = styled(Statistic.Label)`
  &&& {
      font-size: 12px;
      color: ${Colors.textLighter};
  }
`
