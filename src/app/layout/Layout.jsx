import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container } from './Layout.style';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children }) => {
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
                <article>{children}</article>
            </main>
            <footer />
            <ToastContainer />
        </Container>
    );
};

export default Layout;
