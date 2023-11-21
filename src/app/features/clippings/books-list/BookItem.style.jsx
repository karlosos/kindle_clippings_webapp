import { Statistic } from 'semantic-ui-react';
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

export const BookInfo = styled.button`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    min-height: 70px;
    justify-content: center;
    color: #253834;

    width: 15rem;
    @media (min-width: 1250px) {
        width: 25rem;
    }

    &:hover {
        cursor: pointer;
        color: #405c56;
    }

    // Reset button
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
`;

export const BookIcon = styled.img`
    user-drag: none;
    user-select: none;
    width: 57px;
    height: 64px;
`;

export const Title = styled.div`
    font-weight: bold;
    user-select: text;
    text-align: left;
`;

export const Author = styled.div`
    user-select: text;
`;

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

export const NavigationButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
`;

export const Chevron = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #253834;

    &:hover {
        cursor: pointer;
        color: rgb(0 0 0 / 70%);
    }
`;

export const StatisticValue = styled(Statistic.Value)`
    &&&& {
        font-family: 'Inter', sans-serif !important;
        color: #253834; // TODO: make it text
        font-size: 16px !important;
    }
`;

export const StatisticLabel = styled(Statistic.Label)`
    &&& {
        /* color: ${Colors.textLighter}; */
        font-family: 'Inter', sans-serif !important;
        font-weight: 600;
        color: #3e5e57; // TODO: make it textLighter
        font-size: 11px;
    }
`;
