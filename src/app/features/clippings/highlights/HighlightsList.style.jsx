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
    padding-top: 22px;
    display: inline-flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: -16px 1px 0 #e5e5e5;
    padding-bottom: 14px;
`;

export const Title = styled(Header)`
    margin-top: 5px;
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

export const BackButton = styled.div`
    background: #ffffff;
    color: #4d5d50;
    border: 1px solid #f2f6f3;

    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;

    padding: 4px 16px;

    &:hover {
        background: #fafefc;
        cursor: pointer;
    }
`;

export const BackButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AdditionalButtons = styled.div`
    display: flex;
`