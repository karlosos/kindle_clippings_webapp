import React from 'react'
import styled from 'styled-components'

import { Menu } from 'semantic-ui-react'

const QuickLinksItemStyled = styled.div`
  &:hover {
    color: rgba(0,0,0,.87);
  }
`

const QuickLinksItem = ({ name, handleItemClick, activeItem, children }) => {
  return (
    <Menu.Item
      name={name.toString()}
      active={activeItem === name.toString()}
      onClick={handleItemClick}
      as={'div'}
    >
      <QuickLinksItemStyled>
        {children}
      </QuickLinksItemStyled>
    </Menu.Item>
  )
}

export default QuickLinksItem
