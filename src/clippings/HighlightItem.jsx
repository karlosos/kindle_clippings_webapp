import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import Colors from '../common/colors'
import { Link } from 'react-router-dom'
import { toggleFavourite, toggleDeleted } from './clippingsSlice'
import { useDispatch } from 'react-redux'
import copy from 'clipboard-copy'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: -1px;
    padding: 12px;
    display: flex;
    flex-direction: column;
`

const BookInfo = styled.div`
    display: flex;
`

const BookTitle = styled.div`
    font-weight: bold;
`

const Author = styled.div`
    margin-left: 24px;
    color: ${Colors.textLighter};
`

const HighlightInfo = styled.div`
    display: flex;
    margin-top: 8px;
`

const Date = styled.div`
    margin-left: 24px;
    width: 275px;
`

const Location = styled.div`
    margin-left: 12px;
`

const Quote = styled.div`
    max-width: 720px;
    margin-top: 8px;
`

const Favourite = styled.div`
    &:hover {
        color: red;
        cursor: pointer;
    }
    width: 60px;
`

const Delete = styled.div`
    margin-left: 12px;
    &:hover {
        color: red;
        cursor: pointer;
    }
`

const Copy = styled.div`
    margin-left: 24px;
    &:hover {
        color: ${Colors.textLighter};
        cursor: pointer;
    }
`

const Undo = ({ action, onUndo, closeToast }) => {
  const handleClick = () => {
    onUndo();
    closeToast();
  };

  const UndoLink = styled.span`
    color: black;
    text-decoration: underline;
  `

  return (
    <div>
      <h3>
        Highlight {action} <UndoLink onClick={handleClick}>UNDO</UndoLink>
      </h3>
    </div>
  );
};

const HighlightItem = ({ highlightInfo }) => {
  const [copied, setCopied] = useState(false)
  const dispatch = useDispatch()
  const onCopyClick = () => {
    copy(highlightInfo.quote)
    setCopied(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [copied])

  const onLikeClick = () => {
    dispatch(toggleFavourite(highlightInfo.id))
  }

  const onDeleteClick = () => {
    console.log('Delete click')
    dispatch(toggleDeleted(highlightInfo.id))
    if (highlightInfo.deleted) {
      toast(<Undo action="Restored" onUndo={onUndoClick} />);
    }
    else {
      toast(<Undo action="Deleted" onUndo={onUndoClick} />);
    }
  }

  const onUndoClick = () => {
    dispatch(toggleDeleted(highlightInfo.id))
  }

  // Components
  const LikeButton = () => <><Icon name='heart outline' />Like</>
  const UnlikeButton = () => <><Icon name='heart' />Unlike</>
  const DeleteButton = () => <><Icon name='delete' />Delete</>
  const RestoreButton = () => <><Icon name='redo' />Restore</>
  const CopyButton = () => (
    <Copy onClick={onCopyClick}>
      <Icon name='copy outline' />
      Copy
    </Copy>
  )
  const CopiedButton = () => (
    <Copy onClick={onCopyClick}>
      <Icon name='copy' />
      Copied!
    </Copy>
  )

  return (
    <Item>
      <BookInfo>
        <Link to={`/highlights/${highlightInfo.id}/${highlightInfo.book}`}>
          <BookTitle>
            {highlightInfo.book}
          </BookTitle>
        </Link>
        <Author>
          {highlightInfo.author}
        </Author>
      </BookInfo>
      <Quote>
        {highlightInfo.quote}
      </Quote>
      <HighlightInfo>
        <Favourite onClick={onLikeClick}>
          {highlightInfo.favourite === false ? <LikeButton /> : <UnlikeButton />}
        </Favourite>
        <Delete onClick={onDeleteClick}>
          {highlightInfo.deleted === false ? <DeleteButton /> : <RestoreButton />}
        </Delete>
        <Date>
          <Icon name='clock outline' />
          {highlightInfo.time}
        </Date>
        <Location>
          <Icon name='location arrow' />
          {highlightInfo.location}
        </Location>
        {copied ? <CopiedButton /> : <CopyButton />}
      </HighlightInfo>
    </Item>
  )
}


export default HighlightItem
