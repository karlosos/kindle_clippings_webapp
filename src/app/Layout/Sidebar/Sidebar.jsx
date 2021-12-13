import React from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import QuickLinksItem from './QuickLinksItem'
import {
  HomeFilled,
  PlusSquareFilled,
  HighlightFilled,
  HeartFilled,
  DeleteFilled,
  SaveFilled
} from '@ant-design/icons'
import Colors from '../../../common/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveItem } from './sidebarSlice'
import { Link } from 'react-router-dom'

import './Sidebar.css'
import BooksSection from './BooksSection'

const MenuHeader = styled.div`
    font-size: 16px;
    color: ${Colors.textLighter};
`

const MenuStyled = styled(Menu)`
  &&& { 
    border: 0px;
    border-right: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 -10px 10px 0 rgb(34 36 38 / 15%);
    border-radius: 0px;
    height: 100%;
    display: flex;
  }
`

const QuickLinksSectionWrapper = styled(Menu.Item)`
`

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeItem = useSelector((state) => state.sidebar.activeItem)

  const handleItemClick = (e, { name }) => dispatch(setActiveItem(name))

  return (
    <MenuStyled vertical>
      <Menu.Item>
        {/* <MenuHeader>
          Quick Links
        </MenuHeader> */}
        <Menu.Menu>
          <Link to='/'>
            <QuickLinksItem name='dashboard' handleItemClick={handleItemClick} activeItem={activeItem}>
              <HomeFilled /> Dashboard
            </QuickLinksItem>
          </Link>
          <Link to='/import'>
            <QuickLinksItem name='import' handleItemClick={handleItemClick} activeItem={activeItem}>
              <PlusSquareFilled /> Import
            </QuickLinksItem>
          </Link>
          <Link to='/highlights'>
            <QuickLinksItem name='allhighlights' handleItemClick={handleItemClick} activeItem={activeItem}>
              <HighlightFilled /> All Highlights
            </QuickLinksItem>
          </Link>
          <Link to='/favourites'>
            <QuickLinksItem name='favorites' handleItemClick={handleItemClick} activeItem={activeItem}>
              <HeartFilled /> Favorites
            </QuickLinksItem>
          </Link>
          <Link to='/deleted'>
            <QuickLinksItem name='deleted' handleItemClick={handleItemClick} activeItem={activeItem}>
              <DeleteFilled /> Deleted
            </QuickLinksItem>
          </Link>
          <Link to='/demo'>
            <QuickLinksItem name='demo' handleItemClick={handleItemClick} activeItem={activeItem}>
              <SaveFilled /> Demo 
            </QuickLinksItem>
          </Link>
        </Menu.Menu>
      </Menu.Item>
      <BooksSection handleItemClick={handleItemClick} activeItem={activeItem} />
    </MenuStyled>
  )
}

export default Sidebar
export { MenuHeader }
