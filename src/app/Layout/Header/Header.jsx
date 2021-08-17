import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'
import { ReactComponent as Logo } from './logo.svg'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: rgba(0, 0, 0, 0.02);
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;

    p {
      margin: 0 0 0em;
    }

`

const Title = styled('h1')`
  &&& {
    margin: 0 0.5em 0;
  }
`

const SearchBar = styled(Input)`
    justify-self: flex-end;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <p style={{ fontSize: '28px' }}>📚</p>
      <Title>
        Kindle Clippings Manager
      </Title>
      {/* <Logo style={{ width: '50px' }} /> */}
      {/* <SearchBar icon='search' placeholder='Search...' value={searchValue} onChange={handleSearchInput}/> */}
    </HeaderWrapper>
  )
}

export default Header
