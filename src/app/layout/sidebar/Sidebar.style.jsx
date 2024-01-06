import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import Colors from '../colors';

export const MenuHeader = styled.div`
    font-size: 16px;
    color: ${Colors.textLighter};
`;

export const MenuStyled = styled(Menu)`
    &&& {
        border: 0px;
        border-right: 1px solid rgba(34, 36, 38, 0.15);
        box-shadow: 0 -10px 5px 0 rgb(34 36 38 / 10%);
        border-radius: 0px;
        height: 100%;
        display: flex;
    }
`;

export const QuickLinksItemStyled = styled.div`
    display: flex;
    gap: 8px;
`;

export const BookLinkItemStyled = styled(QuickLinksItemStyled)`
    font-size: 14px;
`;

export const BooksSectionWrapper = styled(Menu.Item)`
    &&& {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
`;

export const BooksSectionMenu = styled(Menu.Menu)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const BooksList = styled.div`
    overflow: overlay;
    height: 100px;
    flex-grow: 1;
`;

export const Counter = styled.div`
    background: #4a9d8b;
    background: #3e5e57;
    color: #f2f9f8;
    border-radius: 8px;
    font-size: 14px;
    padding: 2px 8px;
`;
