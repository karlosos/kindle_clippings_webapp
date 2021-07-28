import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar/Sidebar'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
    }

    header {
        border: 1px solid gray;
    }

    aside {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 8px;
    }

    article {
        flex-grow: 1;
        border: 1px solid gray;
        padding: 20px;
    }
`

const Layout = (props) => {
  return (
    <Container>
      <header>
        This is header
      </header>
      <main>
        <aside>
          <Sidebar />
        </aside>
        <article>
          {props.children}
        </article>
      </main>
      <footer />
    </Container>
  )
}

export default Layout
