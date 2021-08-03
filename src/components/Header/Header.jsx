import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../logo.svg'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: rgba(0, 0, 0, 0.02);
    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;
`

const SearchBar = styled(Input)`
    justify-self: flex-end;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo style={{ width: '50px' }} />
      <SearchBar icon='search' placeholder='Search...' />
    </HeaderWrapper>
  )
}

export default Header
