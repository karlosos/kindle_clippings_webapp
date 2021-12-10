import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'
import { ReactComponent as Logo } from './logo.svg'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 100px;
    padding-right: 18px;
    padding-top: 8px;
    padding-bottom: 4px;
    background: #fafafa;
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;
    z-index: 999;
    position: absolute;

    p {
      margin: 0 0 0em;
    }

    -webkit-app-region: drag;
`

const Title = styled('h1')`
  &&& {
    font-size: 14px;
    margin: 0 0.5em 0;
  }
`

const SearchBar = styled(Input)`
    justify-self: flex-end;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <p style={{ fontSize: '18px' }}>📚</p>
      <Title>
        Kindle Clippings Manager
      </Title>
      {/* <Logo style={{ width: '50px' }} /> */}
      {/* <SearchBar icon='search' placeholder='Search...' value={searchValue} onChange={handleSearchInput}/> */}
    </HeaderWrapper>
  )
}

export default Header
