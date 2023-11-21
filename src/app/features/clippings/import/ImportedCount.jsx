import React from 'react';
import { Statistic } from 'semantic-ui-react';

import {
    ImportedCountWrapper,
    StatisticLabel,
    StatisticValue,
} from './ImportedCount.style';

const ImportedCount = ({ highlightsStatistics }) => {
    return (
        <ImportedCountWrapper>
            <span>You have already imported</span>
            <Statistic.Group>
                <Statistic>
                    <StatisticValue>
                        {highlightsStatistics.numHighlights}
                    </StatisticValue>
                    <StatisticLabel>Highlights</StatisticLabel>
                </Statistic>
                <div style={{ paddingTop: '18px' }}>From</div>
                <Statistic>
                    <StatisticValue>
                        {highlightsStatistics.numBooks}
                    </StatisticValue>
                    <StatisticLabel>Books</StatisticLabel>
                </Statistic>
            </Statistic.Group>
        </ImportedCountWrapper>
    );
};

export default ImportedCount;
