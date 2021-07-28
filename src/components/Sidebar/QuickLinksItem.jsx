import React from 'react'

import { Menu } from 'semantic-ui-react'

const QuickLinksItem = ({ name, handleItemClick, activeItem, children }) => {
  return (
    <Menu.Item
      name={name}
      active={activeItem === name}
      onClick={handleItemClick}
    >
      {children}
    </Menu.Item>
  )
}

export default QuickLinksItem
