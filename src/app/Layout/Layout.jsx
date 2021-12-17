import React from "react";
import Header from "./header/Header";
import { ToastContainer } from "react-toastify";

import Sidebar from "./sidebar/Sidebar";
import { Container } from "./Layout.style";

const Layout = (props) => {
  // TODO: simplify this tree
  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <Sidebar />
        </aside>
        <article>{props.children}</article>
      </main>
      <footer />
      <ToastContainer />
    </Container>
  );
};

export default Layout;
