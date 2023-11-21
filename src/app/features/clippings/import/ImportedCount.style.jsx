import { Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

export const ImportedCountWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 24px;
    flex-direction: column;
    color: rgb(37, 56, 52);
`;

export const StatisticValue = styled(Statistic.Value)`
    &&&& {
        font-family: 'Inter', sans-serif !important;
        color: #253834; // TODO: make it text
        font-size: 32px !important;
    }
`;

export const StatisticLabel = styled(Statistic.Label)`
    &&&& {
        font-family: 'Inter', sans-serif !important;
        font-weight: 600;
        color: #3e5e57; // TODO: make it textLighter
        font-size: 14px;
    }
`;
