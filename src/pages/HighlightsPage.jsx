import React, { useState } from 'react'
import styled from 'styled-components'

import { Header, Pagination } from 'semantic-ui-react'
import HighlightItem from '../components/Highlights/HighlightItem'

import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../store/highlightsPaginationSlice'
import {
  useParams
} from "react-router-dom";

const HighlightsWrapper = styled.div`

`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HighlightsPage = () => {
  let { bookTitle } = useParams();
  console.log(bookTitle)
  const highglightsPerPage = 20
  const filteredHighglightsEntries = useSelector((state) => Object.entries(state.clippings.quotes).filter(q => bookTitle ? q[1].book === bookTitle : true))
  // TODO: reset active page on changing params. move state somewhere else?
  const activePage = useSelector((state) => state.highlightsPagination.activePage)
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
  const dispatch = useDispatch()

  const handlePaginationChange = (e, { activePage }) => {
    dispatch(setActivePage(activePage))
    window.scrollTo(0, 0)
  }

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
