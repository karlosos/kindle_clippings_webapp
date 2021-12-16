import styled from 'styled-components'

export const HeaderStyled = styled.div`
  user-select: none;
  padding-top: 4px;
`

export const ImportedCountWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 24px;
    flex-direction: column;
`

const getColorDropZoneBorderColor = (props) => {
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

export const DropZone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColorDropZoneBorderColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`
