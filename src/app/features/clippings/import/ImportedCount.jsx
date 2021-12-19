import React from 'react';
import { Statistic } from 'semantic-ui-react';

import { ImportedCountWrapper } from './ImportPage.style';

const ImportedCount = ({ highlightsStatistics }) => {
    return (
        <ImportedCountWrapper>
            <span>You have alredy imported</span>
            <Statistic.Group>
                <Statistic>
                    <Statistic.Value>
                        {highlightsStatistics.numHighlights}
                    </Statistic.Value>
                    <Statistic.Label>Highlights</Statistic.Label>
                </Statistic>
                <div style={{ paddingTop: '18px' }}>From</div>
                <Statistic>
                    <Statistic.Value>
                        {highlightsStatistics.numBooks}
                    </Statistic.Value>
                    <Statistic.Label>Books</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </ImportedCountWrapper>
    );
};

export default ImportedCount;
