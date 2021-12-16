import Colors from '../colors'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

export const MenuHeader = styled.div`
    font-size: 16px;
    color: ${Colors.textLighter};
`

export const MenuStyled = styled(Menu)`
  &&& { 
    border: 0px;
    border-right: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 -10px 10px 0 rgb(34 36 38 / 15%);
    border-radius: 0px;
    height: 100%;
    display: flex;
  }
`

export const QuickLinksSectionWrapper = styled(Menu.Item)`
`


export const QuickLinksItemStyled = styled.div`
  &:hover {
    color: rgba(0,0,0,.87);
  }
`


export const BooksSectionWrapper = styled(Menu.Item)`
  &&& {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`

export const BooksSectionMenu = styled(Menu.Menu)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const BooksList = styled.div`
  overflow: overlay;
  height: 100px;
  flex-grow: 1;
`