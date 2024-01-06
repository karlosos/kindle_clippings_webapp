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
    padding-bottom: 10px;
`;

export const Title = styled(Header)`
    margin-top: 5px;
    color: rgb(37, 56, 52);
    font-size: 22px;
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

export const Pill = styled.div`
    background: #ffffff;
    color: #4d5d50;
    border: 1px solid #f2f6f3;

    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    font-size: 12px;

    padding: 2px 8px;
    height: 26px;
`;

export const PillGlossy = styled(Pill)`
    background: linear-gradient(180deg, #6dd5be 0%, #558f83 100%);
    box-shadow: 0px 3px 4.2px -2px #6aaea0, inset 0px 2px 1.6px -1px #8cfae2;
    border-radius: 8px;
    color: white;
    border: 1px solid #56887d;
    font-weight: 500;
`;

export const PillSeparator = styled.div`
    height: 24px;
    margin-top: -1px;
    margin-bottom: -1px;
    width: 1px;
    border-left: 1px solid #f2f6f3;
`;

export const PillSeparatorGlossy = styled(PillSeparator)`
    border-left: 1px solid #56887d;
`;

export const BackButton = styled(Pill)`
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
    gap: 8px;
`;
