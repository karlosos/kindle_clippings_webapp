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
        z-index: 10;
        margin-top: 40px;
    }

    header {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 99;
    }

    aside {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 8px;
        height: 100vh;
    }

    article {
        flex-grow: 1;
        padding: 20px;
        height: 100%;
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
