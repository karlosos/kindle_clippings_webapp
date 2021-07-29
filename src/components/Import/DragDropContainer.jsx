import React from 'react'
import styled from 'styled-components'

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

const DropZone = styled.div`
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

const DragDropContainer = ({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => {
    return (
        <DropZone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            <p>Upload MyClippings.txt file</p>
        </DropZone>
    )
}

export default DragDropContainer