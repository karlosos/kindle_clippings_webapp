import React from 'react';
import { Menu } from 'semantic-ui-react';

import { QuickLinksItemStyled, BookLinkItemStyled } from './Sidebar.style';

export const QuickLinksItem = ({ name, handleItemClick, activeItem, children }) => {
    return (
        <Menu.Item
            name={name.toString()}
            active={activeItem === name.toString()}
            onClick={handleItemClick}
            as="div"
        >
            <QuickLinksItemStyled>{children}</QuickLinksItemStyled>
        </Menu.Item>
    );
};

export const BookLinkItem = ({ name, handleItemClick, activeItem, children }) => {
    return (
        <Menu.Item
            name={name.toString()}
            active={activeItem === name.toString()}
            onClick={handleItemClick}
            as="div"
        >
            <BookLinkItemStyled>{children}</BookLinkItemStyled>
        </Menu.Item>
    );
};