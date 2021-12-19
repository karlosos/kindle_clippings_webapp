import React, { useState } from 'react';
import { Header, Pagination } from 'semantic-ui-react';

import HighlightItem from './HighlightItem';
import { Content, Footer, MainHeader, Wrapper } from './HighlightsList.style';

const HighlightsList = ({ highlights }) => {
    const [activePage, setActivePage] = useState(1);

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
        // TODO: fix scroll on page change. We should set scroll on child element (wrapper).
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <MainHeader>
                <Header as="h1">Highlights</Header>
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
