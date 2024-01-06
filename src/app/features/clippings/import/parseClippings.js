import { v5 as uuidv5 } from 'uuid';

const UUID_QUOTES_NAMESPACE = '870af37e-87ab-42e0-91df-709115d62d5f';

const parseText = (content) => {
    const quotesRaw = content.split('==========');
    // Do Not Parse if the array is empty
    if (quotesRaw.length < 2) return;

    const quotes = quotesRaw
        // eslint-disable-next-line
        .map((quoteRaw) => {
            const quoteDirty = quoteRaw.split('\n');
            // Remove empty quotes from array
            const filteredQuoteRaw = quoteDirty.filter((q) => q.length > 1);

            let book = filteredQuoteRaw[0];
            let quote = filteredQuoteRaw[2];
            let location = '';
            let time = '';

            const locationsRaw = filteredQuoteRaw[1];

            if (
                book !== undefined &&
                quote !== undefined &&
                locationsRaw !== undefined
            ) {
                const locationsArray = locationsRaw.split(' ');
                if (locationsArray[2] === 'Loc.') {
                    location = locationsArray[3].replace(/\r?\n|\r/g, '');
                    time = locationsArray
                        .slice(8, 14) // TODO: czasami to nie łapie (ludzie bezdomni vs my twisted world)
                        .join(' ')
                        .replace(/\r?\n|\r/g, '');
                } else {
                    location = locationsArray[7].replace(/\r?\n|\r/g, '');
                    time = locationsArray
                        .slice(12, 18) // TODO: czasami to nie łapie (ludzie bezdomni vs my twisted world)
                        .join(' ')
                        .replace(/\r?\n|\r/g, '');
                }
                // TODO: for new kindle all locations are read as 'location'
                //       remove check from `HighlightItem.jsx`

                // Date extraction not working for:
                // Vaughn-Vernon-Domain-Driven-Design-Distilled-Addison-Wesley-Professional-_2016_ (Vernon, Vaughn)
                // - Your Highlight at location 1459-1462 | Added on Monday, 12 December 2022 17:58:46

                // Working for:
                // Gene-Kim_-Kevin-Behr_-George-Spafford-The-Phoenix-Project_-A-Novel-About-IT_-DevOps_-and-Helping-You (Gene Kim)
                // - Highlight Loc. 3178-80  | Added on Saturday, October 29, 2022, 01:22 PM
                // Polactwo (Rafał A. Ziemkiewicz)
                // - Your Highlight on page 16 | location 243-247 | Added on Sunday, 29 October 2023 15:56:45

                const id = uuidv5(
                    location + quote + time,
                    UUID_QUOTES_NAMESPACE,
                );
                quote = quote.replace(/\r?\n|\r/g, '');
                book = book.replace(/\r?\n|\r/g, '');
                const bookGroups = book.match(/(.*)\((.*)\).*/);
                book = bookGroups !== null ? bookGroups[1] : book;
                const author = bookGroups !== null ? bookGroups[2] : 'Unknown';
                const raw = book
                    .replace(/\r?\n|\r/g, '')
                    .replace(/\s+/g, '')
                    .toLowerCase();

                return {
                    id,
                    raw,
                    book,
                    author,
                    quote,
                    location,
                    time,
                };
            }
        })
        .filter((q) => q)
        .reduce((res, { id, raw, book, author, quote, location, time }) => {
            // eslint-disable-next-line no-param-reassign
            res[id] = {
                raw,
                book,
                author,
                quote,
                location,
                time,
                favourite: false,
                deleted: false,
            };
            return res;
        }, {});
    // eslint-disable-next-line consistent-return
    return quotes;
};

const parseFile = (file, setQuotes) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const content = fileReader.result;
        const quotes = parseText(content);
        setQuotes(quotes);
    };
    fileReader.readAsText(file);
};

export { parseFile, parseText };
