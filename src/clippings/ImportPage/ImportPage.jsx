import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useDropzone } from 'react-dropzone'
import { parseFile } from '../parseClippings'
import DragDropContainer from './DragDropContainer'
import { Header } from 'semantic-ui-react'
import ImportedCount from './ImportedCount'
import { Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { concat, clear } from '../clippingsSlice'
import { loadState } from '../../app/localStorage'

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

  const onBackupButtonClick = () => {
    const appState = loadState()
    console.log(appState)
    console.log('Backup download')

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(appState)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `clippings_backup_${dayjs().format('YYYY-MM-DDTHH:mm:ss')}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
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
      <Header as='h1'>Export/backup</Header>
      <p>
      If you want to backup/export all data to .json file. 
      </p>
      <Button positive onClick={onBackupButtonClick}>Backup</Button>
      <Header as='h1'>Delete all data</Header>
      <p>
      If you want to delete all local data. This will remove all highlights, favourites, etc. There is no going back if you do not have a backup.
      </p>
      <Button negative onClick={onClearButtonClick}>Delete everything</Button>
    </>
  )
}

export default ImportPage
