import React from 'react';

import { HeaderWrapper, Title } from './Header.style';

const Header = () => {
    return (
        <HeaderWrapper>
            <p style={{ fontSize: '18px' }}>📚</p>
            <Title>Kindle Clippings Manager</Title>
            {/* <SearchBar icon='search' placeholder='Search...' value="" onChange={() => undefined}/> */}
        </HeaderWrapper>
    );
};

export default Header;
