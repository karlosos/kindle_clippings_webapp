import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HighlightsList from '../HighlightsList';

const HighlightsPage = () => {
    const { bookTitle } = useParams();
    const highlights = useSelector((state) => {
        const filteredHighlightsEntries = Object.entries(
            state.clippings.quotes,
        ).filter((q) => {
            const deletedFilter = q[1].deleted === false;
            const titleFilter = bookTitle ? q[1].book === bookTitle : true;
            return deletedFilter && titleFilter;
        });
        const filteredHighlights = filteredHighlightsEntries
            .reverse()
            .map((q) => ({
                id: q[0],
                book: q[1].book,
                author: q[1].author,
                quote: q[1].quote,
                time: q[1].time,
                location: q[1].location,
                favourite: q[1].favourite,
                deleted: q[1].deleted,
            }));
        return filteredHighlights;
    });

    return <HighlightsList highlights={highlights} />;
};

export default HighlightsPage;
