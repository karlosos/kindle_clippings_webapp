import React, { useState, useEffect } from 'react'

import { useDropzone } from 'react-dropzone'
import { parseFile } from '../services/parseClippings'
import DragDropContainer from '../components/Import/DragDropContainer'
import { Header } from 'semantic-ui-react'
import ImportedCount from '../components/Import/ImportedCount'

const quoteStatistics = (quotes) => {
    const books = [...new Set(quotes.map(quote => quote.book))]
    return {
        numHighlights: quotes.length,
        numBooks: books.length,
    }
}


const ImportPage = () => {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ maxFiles: 1 })

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0]
            parseFile(file, setQuotes)
        }
    }, [acceptedFiles])

    const quotesItems = quotes.slice(0, 10).map((quote, index) =>
        <li key={index}>
            <b>{quote.book}</b> ({quote.time}) <br /> {quote.quote}
        </li>
    )


    return (
        <>
        <Header as='h1'>Import</Header>
            <DragDropContainer 
                getRootProps={getRootProps} 
                getInputProps={getInputProps}
                isDragActive={isDragActive}
                isDragAccept={isDragAccept}
                isDragReject={isDragReject}
            />
            {quotes.length > 0 &&  <ImportedCount highlightsStatistics={quoteStatistics(quotes)} />}
            <div style={{ maxWidth: '650px', marginTop: '32px'}}>
                {quotesItems}
            </div>
        </>
    )
}

export default ImportPage