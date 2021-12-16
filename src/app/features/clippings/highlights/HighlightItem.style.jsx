import styled from 'styled-components'
import Colors from '../../../layout/colors'

export const Item = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: -1px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`

export const BookInfo = styled.div`
    display: flex;
`

export const BookTitle = styled.div`
    font-weight: bold;
`

export const Author = styled.div`
    margin-left: 24px;
    color: ${Colors.textLighter};
`

export const HighlightInfo = styled.div`
    display: flex;
    margin-top: 8px;
`

export const Date = styled.div`
    margin-left: 24px;
    width: 275px;
`

export const Location = styled.div`
    margin-left: 12px;
`

export const Quote = styled.div`
    max-width: 720px;
    margin-top: 8px;
`

export const Favourite = styled.div`
    &:hover {
        color: red;
        cursor: pointer;
    }
    width: 60px;
`

export const Delete = styled.div`
    margin-left: 12px;
    &:hover {
        color: red;
        cursor: pointer;
    }
`

export const Copy = styled.div`
    margin-left: 24px;
    &:hover {
        color: ${Colors.textLighter};
        cursor: pointer;
    }
`


export const UndoLink = styled.span`
    color: black;
    text-decoration: underline;
  `