import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react';

import HighlightItem from './HighlightItem';
import {
    Content,
    Footer,
    MainHeader,
    Title,
    Wrapper,
} from './HighlightsList.style';

const HighlightsList = ({ title, highlights, bookInfoVisible }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;
    const wrapperRef = useRef();

    const itemsPerPage = 20;
    const numPages = Math.ceil(highlights.length / itemsPerPage);
    // Why highglights.reverse(). is not working here?
    // Pagination works flawlessly but not reverse
    const highlightsFiltered = highlights.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
    );

    // eslint-disable-next-line no-shadow
    const handlePaginationChange = (e, { activePage }) => {
        setSearchParams({
            page: activePage,
        });
        wrapperRef.current.scrollTo(0, 0);
    };

    return (
        <Wrapper ref={wrapperRef}>
            <MainHeader>
                <Title as="h1">{title}</Title>
            </MainHeader>
            <Content>
                {highlightsFiltered.map((highlightInfo) => (
                    <HighlightItem
                        key={highlightInfo.id}
                        highlightInfo={highlightInfo}
                        isBookInfoVisible={bookInfoVisible}
                    />
                ))}
            </Content>
            <Footer>
                <Pagination
                    activePage={page}
                    onPageChange={handlePaginationChange}
                    totalPages={numPages}
                />
            </Footer>
        </Wrapper>
    );
};

export default HighlightsList;
