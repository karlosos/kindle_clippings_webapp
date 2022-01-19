import React, { useRef, useState } from 'react';
import { Header, Pagination } from 'semantic-ui-react';

import HighlightItem from './HighlightItem';
import { Content, Footer, MainHeader, Wrapper } from './HighlightsList.style';

const HighlightsList = ({ title, highlights }) => {
    const [activePage, setActivePage] = useState(1);
    const wrapperRef = useRef();

    const itemsPerPage = 20;
    const numPages = Math.ceil(highlights.length / itemsPerPage);
    // Why highglights.reverse(). is not working here?
    // Pagination works flawlessly but not reverse
    const highlightsFiltered = highlights.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage,
    );

    // eslint-disable-next-line no-shadow
    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
        wrapperRef.current.scrollTo(0, 0);
    };

    return (
        <Wrapper ref={wrapperRef}>
            <MainHeader>
                <Header as="h1">{title}</Header>
            </MainHeader>
            <Content>
                {highlightsFiltered.map((highlightInfo) => (
                    <HighlightItem
                        key={highlightInfo.id}
                        highlightInfo={highlightInfo}
                    />
                ))}
            </Content>
            <Footer>
                <Pagination
                    activePage={activePage}
                    onPageChange={handlePaginationChange}
                    totalPages={numPages}
                />
            </Footer>
        </Wrapper>
    );
};

export default HighlightsList;
