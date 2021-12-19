import React from 'react';
import { Menu } from 'semantic-ui-react';

import { QuickLinksItemStyled } from './Sidebar.style';

const QuickLinksItem = ({ name, handleItemClick, activeItem, children }) => {
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

export default QuickLinksItem;
