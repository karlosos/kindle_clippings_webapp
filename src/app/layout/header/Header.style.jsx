import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 100px;
    padding-right: 18px;
    padding-top: 8px;
    padding-bottom: 4px;
    background: #fafafa;
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;
    border-radius: 8px 8px 0px 0px;
    z-index: 999;

    p {
        margin: 0 0 0em;
    }

    -webkit-app-region: drag;
`;

export const Title = styled('h1')`
    &&& {
        font-size: 14px;
        margin: 0 0.5em 0;
        color: rgb(37, 56, 52);
    }
`;

export const SearchBar = styled(Input)`
    justify-self: flex-end;
`;
