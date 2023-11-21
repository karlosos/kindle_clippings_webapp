import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-grow: 1;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: overlay;
    padding-right: 16px;
`;

export const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    *:last-child {
        margin-bottom: 0;
    }
`;

export const PaginationWrapper = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    width: 100%;
    justify-content: center;
    position: sticky;
    bottom: 0;
    left: 0;
    background-color: white;
    padding-right: 16px;
    box-shadow: 0px -1px 0 #cccccc;
    user-select: none;
`;
