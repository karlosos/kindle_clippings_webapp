import React from 'react';

import { HeaderWrapper, Logo, Title } from './Header.style';

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo><img src='./favicon.svg' width='24px' alt='logo'/></Logo>
            <Title>Kindle Clippings Manager</Title>
            {/* <SearchBar icon='search' placeholder='Search...' value="" onChange={() => undefined}/> */}
        </HeaderWrapper>
    );
};

export default Header;
