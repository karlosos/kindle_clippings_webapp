import React from "react";
import { HeaderWrapper, Title } from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <p style={{ fontSize: "18px" }}>📚</p>
      <Title>Kindle Clippings Manager</Title>
      {/* <Logo style={{ width: '50px' }} /> */}
      {/* <SearchBar icon='search' placeholder='Search...' value={searchValue} onChange={handleSearchInput}/> */}
    </HeaderWrapper>
  );
};

export default Header;
