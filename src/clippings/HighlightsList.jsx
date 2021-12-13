import React, { useState } from 'react'
import styled from 'styled-components'

import { Header, Pagination } from 'semantic-ui-react'
import HighlightItem from './HighlightItem'

const Wrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: overlay;
`

// TODO: those alpha box-shadow cummulates
const MainHeader = styled.div`
  user-select: none;
  padding-top: 8px;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: -16px 1px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 14px;
`

const Content = styled.div`
  flex-grow: 1;
  padding-right: 16px;
`

const Footer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: white;
  padding-right: 16px;
  box-shadow: -16px -1px 0 rgba(0, 0, 0, 0.2);
  user-select: none;
`


const HighlightsList = ({ highlights }) => {
  const [activePage, setActivePage] = useState(1)

  const itemsPerPage = 20
  const numPages = Math.ceil(highlights.length / itemsPerPage)
  // Why highglights.reverse(). is not working here?
  // Pagination works flawlessly but not reverse
  const highlightsFiltered = highlights.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage)
    // TODO: inside element scroll
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper>
      <MainHeader>
        <Header as='h1'>Highlights</Header>
      </MainHeader>
      <Content>
        {
            highlightsFiltered.map((highlightInfo) => (
              <HighlightItem key={highlightInfo.id} highlightInfo={highlightInfo} />
            ))
        }
      </Content>
      <Footer>
        <Pagination
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={numPages}
        />
      </Footer>
    </Wrapper>
  )
}

export default HighlightsList
