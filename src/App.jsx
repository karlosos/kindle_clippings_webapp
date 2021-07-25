import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { parseFile } from './services/parseClippings'

import './App.css'

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#eeeeee'
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`

function App () {
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

  useEffect(() => {
    console.log(quotes)
  }, [quotes])

  const quotesItems = quotes.slice(0, 10).map((quote, index) =>
    <li key={index}>
      <b>{quote.book}</b> ({quote.time}) | {quote.quote}
    </li>
  );

  return (
    <div className='container'>
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </Container>
      {quotesItems}
    </div>
  )
}

export default App
