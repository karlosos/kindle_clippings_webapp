import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import { ToastContainer } from 'react-toastify'

import Sidebar from './Sidebar/Sidebar'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;

    header {
      background-color: white;
      z-index: 99;
    }

    main {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      z-index: 10;

      width: 100%;
      display: flex;
      overflow: hidden;
    }

    aside {
      flex-shrink: 0;
    }

    article {
      flex-grow: 1;
      overflow: overlay;
      margin-left: 16px;
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
