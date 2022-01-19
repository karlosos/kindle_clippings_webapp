import React from 'react';
import { useSelector } from 'react-redux';

import HighlightsList from '../HighlightsList';

const DeletedPage = () => {
    const filteredHighglightsEntries = useSelector((state) =>
        Object.entries(state.clippings.quotes).filter(
            (q) => q[1].deleted === true,
        ),
    );
    const highlights = filteredHighglightsEntries.reverse().map((q) => ({
        id: q[0],
        book: q[1].book,
        author: q[1].author,
        quote: q[1].quote,
        time: q[1].time,
        location: q[1].location,
        favourite: q[1].favourite,
        deleted: q[1].deleted,
    }));

    return <HighlightsList title="Deleted" highlights={highlights} />;
};

export default DeletedPage;
