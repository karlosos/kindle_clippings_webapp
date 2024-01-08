import * as crypto from 'crypto';

const generateQuote = (book, id) => {
    return {
        raw: book,
        book,
        author: 'Author',
        quote: `quote-${id}`,
        location: id,
        time: 'Sunday, September 06, 2015, 08:47 PM',
        favourite: false,
        deleted: false,
    };
};

const generateBook = (id) => {
    return {
        id,
        title: `book-${id}`,
        author: 'Author',
        lastHighlights: 'Tuesday, October 27, 2015, 11:30 AM',
        numHighlights: 1,
    };
};

const books = [...Array(50)].map((_, idx) => generateBook(idx));
const quotes = books.flatMap((book) =>
    [...Array(1)].map((_, idx) => [
        crypto.randomUUID(),
        generateQuote(book.title, idx),
    ]),
);

export const clippingsMultipage = {
    quotes: Object.fromEntries(quotes),
    books,
};
