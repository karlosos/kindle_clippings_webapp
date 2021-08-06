import React, { useEffect } from 'react'

import { useDropzone } from 'react-dropzone'
import { parseFile } from '../parseClippings'
import DragDropContainer from './DragDropContainer'
import { Header } from 'semantic-ui-react'
import ImportedCount from './ImportedCount'

import { useSelector, useDispatch } from 'react-redux'
import { concat, clear } from '../clippingsSlice'

const quoteStatistics = (quotes) => {
  const quotesEntries = Object.entries(quotes)
  const books = [...new Set(quotesEntries.map(quote => quote[1].book))]
  console.log(books.length)
  return {
    numHighlights: quotesEntries.length,
    numBooks: books.length
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

  const quotes = useSelector((state) => state.clippings.quotes)
  const dispatch = useDispatch()
  const setQuotes = (quotes) => {
    dispatch(concat(quotes))
  }

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      parseFile(file, setQuotes)
    }
  }, [acceptedFiles])

  const onClearButtonClick = () => {
    console.log('Try to clear')
    dispatch(clear())
  }

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
      {quotes !== {} && <ImportedCount highlightsStatistics={quoteStatistics(quotes)} />}
      <button onClick={onClearButtonClick}>Clear</button>
    </>
  )
}

export default ImportPage
