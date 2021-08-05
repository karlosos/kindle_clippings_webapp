import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Header, Pagination } from 'semantic-ui-react'
import HighlightItem from '../components/Highlights/HighlightItem'

import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from "react-router-dom";

const HighlightsWrapper = styled.div`

`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HighlightsPage = () => {
  let { bookTitle } = useParams();
  const [activePage, setActivePage] = useState(1)

  const highglightsPerPage = 20
  const filteredHighglightsEntries = useSelector((state) => Object.entries(state.clippings.quotes).filter(q => bookTitle ? q[1].book === bookTitle : true))
  const numPages = useSelector((state) => Math.ceil(filteredHighglightsEntries.length / highglightsPerPage))
  const highlights = useSelector((state) => {
    return (
      filteredHighglightsEntries.reverse().slice((activePage-1)*highglightsPerPage, activePage*highglightsPerPage).map(q => (
        {
          id: q[0],
          book: q[1].book,
          author: q[1].author,
          quote: q[1].quote,
          time: q[1].time,
          location: q[1].location,
          favourite: q[1].favourite
        }
      ))
    )
  })

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage)
    window.scrollTo(0, 0)
  }

    const { pathname } = useLocation();

    useEffect(() => {
      setActivePage(1)
      window.scrollTo(0, 0);
    }, [pathname]);


  return (
    <>
      <Header as='h1'>Highlights</Header>

      <HighlightsWrapper>
        {
            highlights.map((highlightInfo) => (
              <HighlightItem highlightInfo={highlightInfo} />
            ))
            }
      </HighlightsWrapper>
      <PaginationWrapper>
        <Pagination 
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={numPages}
        />
      </PaginationWrapper>
    </>
  )
}

export default HighlightsPage
