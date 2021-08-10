import React from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import QuickLinksItem from './QuickLinksItem'
import {
  HomeFilled,
  PlusSquareFilled,
  HighlightFilled,
  HeartFilled,
  DeleteFilled
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

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeItem = useSelector((state) => state.sidebar.activeItem)

  const handleItemClick = (e, { name }) => dispatch(setActiveItem(name))

  const books = useSelector((state) => state.clippings.books)

  return (
    <Menu vertical>
      <Menu.Item>
        <MenuHeader>
          Quick Links
        </MenuHeader>
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
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <BooksSection books={books} handleItemClick={handleItemClick} activeItem={activeItem}/>
      </Menu.Item>
    </Menu>
  )
}

export default Sidebar
export { MenuHeader }