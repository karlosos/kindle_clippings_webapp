import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import styled from 'styled-components'
import QuickLinksItem from './QuickLinksItem'
import {
  BookFilled,
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

const MenuHeader = styled.div`
    font-size: 16px;
    color: ${Colors.textLighter};
`

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeItem = useSelector((state) => state.sidebar.activeItem)

  const handleItemClick = (e, { name }) => dispatch(setActiveItem(name))

  const books = useSelector((state) => state.clippings.books.slice(0, 5))

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
          <QuickLinksItem name='deleted' handleItemClick={handleItemClick} activeItem={activeItem}>
            <DeleteFilled /> Deleted
          </QuickLinksItem>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <MenuHeader>
          Books
        </MenuHeader>
        <Menu.Menu>
          <Menu.Item>
            <Input
              icon={{ name: 'search', circular: true, link: true }}
              placeholder='Search...'
            />
          </Menu.Item>
          {books.map((book, index) => (
            <Link to={`/highlights/${book.id}/${book.title}`}>
              <QuickLinksItem
                name={book.id}
                handleItemClick={handleItemClick}
                activeItem={activeItem}
                key={index}
              >
                <BookFilled /> {book.title}
              </QuickLinksItem>
            </Link>
          )
          )}
          <Menu.Item>
            <Link to='/dashboard'>Show all books</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  )
}

export default Sidebar
