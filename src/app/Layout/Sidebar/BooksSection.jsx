import React, { useState, useMemo } from 'react'
import { MenuHeader } from './Sidebar'
import { Menu, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import QuickLinksItem from './QuickLinksItem'
import Fuse from 'fuse.js'
import { throttle } from 'lodash'

const BooksSection = ({ books, handleItemClick, activeItem }) => {
  const initialData = books.slice(0, 5).map((book) => ({ item: book }))
  const [searchData, setSearchData] = useState(initialData)
  const fuse = new Fuse(books, {
    includeScore: true,
    keys: ['title', 'author']
  })

  const searchBooks = (query) => {
    console.log('search books')
    if (!query) {
      setSearchData(initialData)
      return
    }

    const result = fuse.search(query)
    setSearchData(result)
  }

  const throttledSearch = useMemo(
    () => throttle(searchBooks, 300),
    []
  )

  return (
    <>
      <MenuHeader>
        Books
      </MenuHeader>
      <Menu.Menu>
        <Menu.Item>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
            onChange={(e) => throttledSearch(e.target.value)}
          />
        </Menu.Item>
        {searchData.map((searchItem, index) => {
          const book = searchItem.item

          return (
            <Link to={`/highlights/${book.id}/${book.title}`}>
              <QuickLinksItem
                name={book.id}
                handleItemClick={handleItemClick}
                activeItem={activeItem}
                key={index}
              >
                <Icon name='book' style={{ float: 'left' }} /> {book.title}
              </QuickLinksItem>
            </Link>
          )
        }
        )}
        <Menu.Item>
          <Link to='/dashboard'>Show all books</Link>
        </Menu.Item>
      </Menu.Menu>
    </>
  )
}

export default BooksSection
