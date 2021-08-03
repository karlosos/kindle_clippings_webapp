import React, { useState } from 'react'
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
import Colors from '../../common/colors'

import {
  Link
} from 'react-router-dom'

import './Sidebar.css'

const MenuHeader = styled.div`
    font-size: 16px;
    color: ${Colors.textLighter};
`

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState()

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const books = [
    { id: '1', title: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, too' },
    { id: '2', title: 'Homo Deus: A Bried History of Tomorrow' },
    { id: '3', title: 'Fluent Forever: How to Learn Any Language Fast and Never Forget It' },
    { id: '4', title: 'Essentialism: The Disciplined Pursuit of Less' }
  ]

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
          <QuickLinksItem name='favorites' handleItemClick={handleItemClick} activeItem={activeItem}>
            <HeartFilled /> Favorites
          </QuickLinksItem>
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
          {books.map((book) => (
            <QuickLinksItem
              name={book.id}
              handleItemClick={handleItemClick}
              activeItem={activeItem}
            >
              <BookFilled /> {book.title}
            </QuickLinksItem>
          )
          )}
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  )
}

export default Sidebar
