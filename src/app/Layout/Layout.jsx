import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import { toast, ToastContainer } from 'react-toastify'

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
    }

    aside {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 8px;
    }

    article {
        flex-grow: 1;
        padding: 20px;
    }
`

const Layout = (props) => {
  return (
    <Container>
      <header>
        <Header />
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
      <ToastContainer />
    </Container>
  )
}

export default Layout
