import React, { useState, useMemo, useRef, useEffect } from 'react'
import { MenuHeader } from './Sidebar'
import { Menu, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import QuickLinksItem from './QuickLinksItem'
import Fuse from 'fuse.js'
import { throttle } from 'lodash'
import { useSelector } from 'react-redux'

const initialData = (books) => books.slice(0, 5).map((book) => ({ item: book }))

const BooksSection = ({ handleItemClick, activeItem }) => {
  const books = useSelector((state) => state.clippings.books)

  const fuse = useRef(new Fuse(books, {
    includeScore: true,
    keys: ['title', 'author']
  }))

  const [searchData, setSearchData] = useState(initialData(books))

  useEffect(() => {
    setSearchData(initialData(books))
    fuse.current = new Fuse(books, {
      includeScore: true,
      keys: ['title', 'author']
    })
  }, [books])

  const searchBooks = (query, books) => {
    // Books were old because we use Memo!
    // To have the most recent books props we need to pass them as an argument
    // or probably store them in ref
    if (!query) {
      setSearchData(initialData(books))
      return
    }

    const result = fuse.current.search(query)
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
        <Menu.Item key={'searchInput'}>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
            onChange={(e) => throttledSearch(e.target.value, books)}
          />
        </Menu.Item>
        <div style={{overflow: 'overlay', height: '100px'}}>
        {searchData.map((searchItem, index) => {
          const book = searchItem.item

          return (
            <Link to={`/highlights/${book.id}/${book.title}`} key={index}>
              <QuickLinksItem
                name={book.id}
                handleItemClick={handleItemClick}
                activeItem={activeItem}
              >
                <Icon name='book' style={{ float: 'left' }} /> {book.title}
              </QuickLinksItem>
            </Link>
          )
        }
        )}
        </div>
        <Menu.Item key={'allBooksLink'}>
          <Link to='/dashboard'>Show all books</Link>
        </Menu.Item>
      </Menu.Menu>
    </>
  )
}

export default BooksSection
