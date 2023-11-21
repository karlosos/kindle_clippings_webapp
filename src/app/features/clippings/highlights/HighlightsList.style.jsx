import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-grow: 1;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: overlay;
`;

export const MainHeader = styled.div`
    padding-top: 24px;
    display: inline-flex;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: -16px 1px 0 #e5e5e5;
    padding-bottom: 14px;
`;

export const Title = styled(Header)`
    color: rgb(37, 56, 52);
`;

export const Content = styled.div`
    flex-grow: 1;
    padding-right: 16px;
`;

export const Footer = styled.div`
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
    box-shadow: -16px -1px 0 #e5e5e5;
    user-select: none;
`;
