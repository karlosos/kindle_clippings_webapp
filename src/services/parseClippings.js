const parseFile = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
    const content = fileReader.result

    // TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result

    const quotesRaw = content.split('==========')
    // Do Not Parse if the array is empty
    if (quotesRaw.length < 2) return

    const quotes = quotesRaw
        // eslint-disable-next-line
        .map((quoteRaw) => {
            const quoteDirty = quoteRaw.split('\n')
            // Remove empty quotes from array
            quoteRaw = quoteDirty.filter((q) => {
                return q.length > 1
            })

            const book = quoteRaw[0]
            const quote = quoteRaw[2]
            let location = ''
            let time = ''

            const locationsRaw = quoteRaw[1]

            if (
                (book !== undefined) &
                (quote !== undefined) &
                (locationsRaw !== undefined)
            ) {
                const locationsArray = locationsRaw.split(' ')
                location = locationsArray[5].replace(/\r?\n|\r/g, '')
                time = locationsArray
                    .slice(9, 15)
                    .join(' ')
                    .replace(/\r?\n|\r/g, '')

                return {
                    raw: book
                        .replace(/\r?\n|\r/g, '')
                        .replace(/\s+/g, '')
                        .toLowerCase(),
                    book: book.replace(/\r?\n|\r/g, ''),
                    quote: quote.replace(/\r?\n|\r/g, ''),
                    location,
                    time
                }
            }
        })
        .filter((q) => q)

    return quotes
}

export { parseFile }