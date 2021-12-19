/* eslint-disable react/no-unstable-nested-components */
import copy from 'clipboard-copy';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from 'semantic-ui-react';

import { toggleDeleted, toggleFavourite } from '../clippingsSlice';
import {
    Author,
    BookInfo,
    BookTitle,
    Copy,
    Date,
    Delete,
    Favourite,
    HighlightInfo,
    Item,
    Location,
    Quote,
    UndoLink,
} from './HighlightItem.style';

const Undo = ({ action, onUndo, closeToast }) => {
    const handleClick = () => {
        onUndo();
        closeToast();
    };

    return (
        <div>
            <h3>
                Highlight {action}{' '}
                <UndoLink onClick={handleClick}>UNDO</UndoLink>
            </h3>
        </div>
    );
};

const HighlightItem = ({ highlightInfo }) => {
    const [copied, setCopied] = useState(false);
    const dispatch = useDispatch();
    const onCopyClick = () => {
        copy(highlightInfo.quote);
        setCopied(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [copied]);

    const onLikeClick = () => {
        dispatch(toggleFavourite(highlightInfo.id));
    };

    const onDeleteClick = () => {
        dispatch(toggleDeleted(highlightInfo.id));
        if (highlightInfo.deleted) {
            toast(<Undo action="Restored" onUndo={onUndoDeleteClick} />);
        } else {
            toast(<Undo action="Deleted" onUndo={onUndoDeleteClick} />);
        }
    };

    const onUndoDeleteClick = () => {
        dispatch(toggleDeleted(highlightInfo.id));
    };

    const LikeButton = () => (
        <>
            <Icon name="heart outline" />
            Like
        </>
    );

    const UnlikeButton = () => (
        <>
            <Icon name="heart" />
            Unlike
        </>
    );

    const DeleteButton = () => (
        <>
            <Icon name="delete" />
            Delete
        </>
    );

    const RestoreButton = () => (
        <>
            <Icon name="redo" />
            Restore
        </>
    );

    const CopyButton = () => (
        <Copy onClick={onCopyClick}>
            <Icon name="copy outline" />
            Copy
        </Copy>
    );

    const CopiedButton = () => (
        <Copy onClick={onCopyClick}>
            <Icon name="copy" />
            Copied!
        </Copy>
    );

    return (
        <Item>
            <BookInfo>
                <Link
                    to={`/highlights/${highlightInfo.id}/${highlightInfo.book}`}
                >
                    <BookTitle>{highlightInfo.book}</BookTitle>
                </Link>
                <Author>{highlightInfo.author}</Author>
            </BookInfo>
            <Quote>{highlightInfo.quote}</Quote>
            <HighlightInfo>
                <Favourite onClick={onLikeClick}>
                    {highlightInfo.favourite === false ? (
                        <LikeButton />
                    ) : (
                        <UnlikeButton />
                    )}
                </Favourite>
                <Delete onClick={onDeleteClick}>
                    {highlightInfo.deleted === false ? (
                        <DeleteButton />
                    ) : (
                        <RestoreButton />
                    )}
                </Delete>
                <Date>
                    <Icon name="clock outline" />
                    {highlightInfo.time}
                </Date>
                <Location>
                    <Icon name="location arrow" />
                    {highlightInfo.location}
                </Location>
                {copied ? <CopiedButton /> : <CopyButton />}
            </HighlightInfo>
        </Item>
    );
};

export default HighlightItem;
