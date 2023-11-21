/* eslint-disable react/no-unstable-nested-components */
import copy from 'clipboard-copy';
import {
    BookmarkMinusIcon,
    BookmarkPlusIcon,
    CalendarClockIcon,
    CopyCheckIcon,
    CopyIcon,
    NavigationIcon,
    RotateCwIcon,
    Trash2Icon,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toggleDeleted, toggleFavourite } from '../clippingsSlice';
import {
    ActionIcon,
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

const HighlightItem = (
    { highlightInfo, isBookInfoVisible } = { isBookInfoVisible: false },
) => {
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
            <ActionIcon>
                <BookmarkPlusIcon size={16} />
            </ActionIcon>
            Like
        </>
    );

    const UnlikeButton = () => (
        <>
            <ActionIcon>
                <BookmarkMinusIcon size={16} />
            </ActionIcon>
            Unlike
        </>
    );

    const DeleteButton = () => (
        <>
            <ActionIcon>
                <Trash2Icon size={16} />
            </ActionIcon>
            Delete
        </>
    );

    const RestoreButton = () => (
        <>
            <ActionIcon>
                <RotateCwIcon size={16} name="redo" />
            </ActionIcon>
            Restore
        </>
    );

    const CopyButton = () => (
        <Copy onClick={onCopyClick}>
            <ActionIcon>
                <CopyIcon size={16} />
            </ActionIcon>
            Copy
        </Copy>
    );

    const CopiedButton = () => (
        <Copy onClick={onCopyClick}>
            <ActionIcon>
                <CopyCheckIcon size={16} />
            </ActionIcon>
            Copied!
        </Copy>
    );

    return (
        <Item>
            {isBookInfoVisible && (
                <BookInfo>
                    <Link to={`/highlights/${highlightInfo.book}`}>
                        <BookTitle>{highlightInfo.book}</BookTitle>
                    </Link>
                    <Author>{highlightInfo.author}</Author>
                </BookInfo>
            )}
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
                    <ActionIcon>
                        <CalendarClockIcon size={16} />
                    </ActionIcon>
                    {highlightInfo.time}
                </Date>
                {/* // TODO: remove this check and fix location on new kindle */}
                {highlightInfo.location !== 'location' && (
                    <Location>
                        <ActionIcon>
                            <NavigationIcon size={16} />
                        </ActionIcon>
                        {highlightInfo.location}
                    </Location>
                )}
                {copied ? <CopiedButton /> : <CopyButton />}
            </HighlightInfo>
        </Item>
    );
};

export default HighlightItem;
