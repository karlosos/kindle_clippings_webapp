import React from 'react'
import styled from 'styled-components'

const Item = styled.div`

`

const HighlightItem = ({highlightInfo}) => {
    return (
        <Item>
            {highlightInfo.book}, {highlightInfo.author}
            <br />
            {highlightInfo.quote}
            <br />
            {highlightInfo.date}, {highlightInfo.location}
            <hr />
        </Item>
    )
}

export default HighlightItem