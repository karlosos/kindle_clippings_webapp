import React, { useState } from 'react'
import styled from 'styled-components'

import { Header, Pagination } from 'semantic-ui-react'
import HighlightItem from './HighlightItem'

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
`

const Content = styled.div`
  flex: 1 1 auto;
`

const Footer = styled.div`
  flex: 0 1 40px;
`

const HeaderStyled = styled(Header)`
flex: 0 1 auto;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
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
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper>
      <HeaderStyled as='h1'>Highlights</HeaderStyled>
      <Content>
        {
            highlightsFiltered.map((highlightInfo) => (
              <HighlightItem key={highlightInfo.id} highlightInfo={highlightInfo} />
            ))
        }
      </Content>
      <Footer>
      <PaginationWrapper>
        <Pagination
          activePage={activePage}
          onPageChange={handlePaginationChange}
          totalPages={numPages}
        />
      </PaginationWrapper>
      </Footer>
    </Wrapper>
  )
}

export default HighlightsList
