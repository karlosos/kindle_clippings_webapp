import { Icon, Statistic } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

import Colors from '../../../layout/colors';

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
`;

export const RowGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BookInfo = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    min-height: 70px;
    justify-content: center;

    width: 15rem;
    @media (min-width: 1250px) {
        width: 25rem;
    }
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const Author = styled.div``;

export const statisticsSize = css`
    font-size: 12px;
    width: 8rem;
    @media (min-width: 1250px) {
        font-size: 14px;
        width: 13rem;
    }
`;

export const LastHighlight = styled.div`
    margin-left: 24px;
    display: flex;
    justify-content: center;
    ${statisticsSize};
`;

export const NumHighlights = styled.div`
    margin-left: 24px;
    display: flex;
    justify-content: center;
    ${statisticsSize};
`;

export const StyledIcon = styled(Icon)`
    &:hover {
        cursor: pointer;
        color: rgb(0 0 0 / 70%);
        box-shadow: 0 0 0 0.1em rgb(0 0 0 / 70%) inset !important;
    }
`;

export const StatisticValue = styled(Statistic.Value)`
    &&&& {
        font-size: 1.2em !important;
        @media (min-width: 1250px) {
            font-size: 1.5em !important;
        }
    }
`;

export const StatisticLabel = styled(Statistic.Label)`
    &&& {
        color: ${Colors.textLighter};
        font-size: 0.8em;
        @media (min-width: 1250px) {
            font-size: 0.85em;
        }
    }
`;
