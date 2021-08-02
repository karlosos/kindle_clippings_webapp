import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import Colors from '../../common/colors'

const Item = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: -1px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`

const BookInfo = styled.div`
    display: flex;
`

const BookTitle = styled.div`
    font-weight: bold;
`

const Author = styled.div`
    margin-left: 24px;
    color: ${Colors.textLighter};
`

const HighlightInfo = styled.div`
    display: flex;
    margin-top: 8px;
`

const Date = styled.div`
    margin-left: 24px;
    width: 160px;
`

const Location = styled.div`
    margin-left: 24px;
`

const Quote = styled.div`
    max-width: 720px;
    margin-top: 8px;
`

const Favourite = styled.div`
    &:hover {
        color: red;
        cursor: pointer;
    }
    width: 60px;
`

const Copy = styled.div`
    margin-left: 24px;
    &:hover {
        color: ${Colors.textLighter};
        cursor: pointer;
    }
`

const HighlightItem = ({highlightInfo}) => {
    const onCopyClick = () => {
        console.log(highlightInfo)
    }

    const onLikeClick = () => {
        console.log("Toggle like", highlightInfo.book)
    }

    return (
        <Item>
            <BookInfo>
                <BookTitle>
                    {highlightInfo.book}
                </BookTitle>
                <Author>
                    {highlightInfo.author}
                </Author>
            </BookInfo>
            <Quote>
                {highlightInfo.quote}
            </Quote>
            <HighlightInfo>
                <Favourite onClick={onLikeClick}>
                    {highlightInfo.favourite ? 
                        <>
                            <Icon name="heart outline" />
                            Like
                        </>
                    : 
                        <>
                            <Icon name="heart" />
                            Unlike
                        </>
                    }
                </Favourite>
                <Date>
                    <Icon name="clock outline" />
                    {highlightInfo.date}
                </Date>
                <Location>
                    <Icon name="location arrow" />
                    {highlightInfo.location}
                </Location>
                <Copy onClick={onCopyClick}>
                    <Icon name="copy" />
                    Copy
                </Copy>

            </HighlightInfo>
        </Item>
    )
}

export default HighlightItem