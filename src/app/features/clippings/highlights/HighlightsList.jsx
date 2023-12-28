import { ChevronLeft } from 'lucide-react';
import React, { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react';

import HighlightItem from './HighlightItem';
import {
    AdditionalButtons,
    BackButton,
    Content,
    Footer,
    MainHeader,
    Title,
    Wrapper,
} from './HighlightsList.style';

const HighlightsList = ({ title, highlights, bookInfoVisible }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;
    const booksListPage = searchParams.get('booksListPage');
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
        // Set search params
        const params = {};
        params.page = activePage;
        if (booksListPage) {
            params.booksListPage = booksListPage;
        }
        setSearchParams(params);

        wrapperRef.current.scrollTo(0, 0);
    };

    return (
        <Wrapper ref={wrapperRef}>
            <MainHeader>
                {booksListPage && (
                    <AdditionalButtons>
                        <BackButton
                            onClick={() => navigate(`/?page=${booksListPage}`)}
                        >
                            <ChevronLeft />
                            Go back
                        </BackButton>
                    </AdditionalButtons>
                )}
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
