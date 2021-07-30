import React from 'react'
import BookItem from './BookItem'
import styled from 'styled-components'

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const BooksList = () => {
  const books = [
    { 
        id: '1', 
        title: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, too',
        author: 'Gabriel Wynver',
        lastHighlights: '2 month ago',
        numHighlights: '16',
    },
    { 
        id: '2', 
        title: 'Homo Deus: A Bried History of Tomorrow',
        author: 'Charles Conrad',
        lastHighlights: '1 month ago',
        numHighlights: '32',
    },
    { 
        id: '3', 
        title: 'Fluent Forever: How to Learn Any Language Fast and Never Forget It',
        author: 'Gabriel Wynver',
        lastHighlights: '1 month ago',
        numHighlights: '42',
    },
    { 
        id: '4', 
        title: 'Essentialism: The Disciplined Pursuit of Less' ,
        author: 'Frank Basten',
        lastHighlights: '1 week ago',
        numHighlights: '42',
    }
  ]

    return (
        <BooksContainer>
            {books.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </BooksContainer>
    )
}

export default BooksList
