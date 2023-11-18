import styled from 'styled-components';

import Colors from '../../../layout/colors';

export const Item = styled.div`
    border: 1px solid #e5e5e5;
    margin-bottom: -1px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`;

export const BookInfo = styled.div`
    display: flex;
`;

export const BookTitle = styled.div`
    font-weight: bold;
`;

export const Author = styled.div`
    margin-left: 24px;
    color: ${Colors.textLighter};
`;

export const Quote = styled.div`
    max-width: 720px;
    margin-top: 8px;
    color: ${Colors.text};
`;

//
// Actions & Info
//
export const HighlightInfo = styled.div`
    display: flex;
    margin-top: 12px;
    gap: 16px;
`;

const Action = styled.div`
    background: #ffffff;
    color: #4d5d50;
    border: 1px solid #f2f6f3;

    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;

    /* font-weight: 600; */
    padding: 4px 16px;

    &:hover {
        background: #fafefc;
        cursor: pointer;
    }
`;

export const ActionIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Date = styled(Action)`
    width: 275px;
    &:hover {
        cursor: auto;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Location = styled(Action)`
    &:hover {
        cursor: auto;
    }
`;

export const Favourite = styled(Action)`
    width: 80px;
`;

export const Delete = styled(Action)``;

export const Copy = styled(Action)``;

export const UndoLink = styled.span`
    color: black;
    text-decoration: underline;
`;
