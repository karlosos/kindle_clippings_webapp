import React from 'react'
import styled from 'styled-components'

import { Statistic } from 'semantic-ui-react'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 24px;
    flex-direction: column;
`

const ImportedCount = ({highlightsStatistics}) => {
    return (
        <Wrapper>
            <span>
                Succesfully imported highlights!
            </span>
            <Statistic.Group>
                <Statistic>
                    <Statistic.Value>{highlightsStatistics.numHighlights}</Statistic.Value>
                    <Statistic.Label>Highlights</Statistic.Label>
                </Statistic>
                <div style={{paddingTop: '18px'}}>
                    From
                </div>
                <Statistic>
                    <Statistic.Value>{highlightsStatistics.numBooks}</Statistic.Value>
                    <Statistic.Label>Books</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Wrapper>
    )
}

export default ImportedCount