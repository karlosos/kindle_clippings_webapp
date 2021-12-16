import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: overlay;
`

// TODO: those alpha box-shadow cummulates
export const MainHeader = styled.div`
  user-select: none;
  padding-top: 8px;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: -16px 1px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 14px;
`

export const Content = styled.div`
  flex-grow: 1;
  padding-right: 16px;
`

export const Footer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: white;
  padding-right: 16px;
  box-shadow: -16px -1px 0 rgba(0, 0, 0, 0.2);
  user-select: none;
`
