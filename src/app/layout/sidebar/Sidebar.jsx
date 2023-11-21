import {
    BookmarkIcon,
    FolderInputIcon,
    HighlighterIcon,
    LibraryBigIcon,
    SaveIcon,
    TrashIcon,
} from 'lucide-react';
// TODO: remove @ant-design/cons
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { selectBooksCount } from '../../features/clippings/clippingsSlice';

import BooksSection from './BooksSection';
import QuickLinksItem from './QuickLinksItem';
import './Sidebar.css';
import { Counter, MenuStyled } from './Sidebar.style';
import { setActiveSidebarItem } from './sidebarSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.sidebar.activeItem);
    const booksCount = useSelector(selectBooksCount);

    const handleItemClick = (e, { name }) =>
        dispatch(setActiveSidebarItem(name));

    return (
        <MenuStyled vertical role='menu'>
            <Menu.Item>
                <Menu.Menu>
                    <Link to="/">
                        <QuickLinksItem
                            name="dashboard"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <LibraryBigIcon size={18} /> Books
                            <Counter>
                                {booksCount}
                            </Counter>
                        </QuickLinksItem>
                    </Link>
                    <Link to="/import">
                        <QuickLinksItem
                            name="import"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <FolderInputIcon size={18} /> Import
                        </QuickLinksItem>
                    </Link>
                    <Link to="/highlights">
                        <QuickLinksItem
                            name="allhighlights"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <HighlighterIcon size={18} /> All Highlights
                        </QuickLinksItem>
                    </Link>
                    <Link to="/favourites">
                        <QuickLinksItem
                            name="favorites"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <BookmarkIcon size={18} /> Favorites
                        </QuickLinksItem>
                    </Link>
                    <Link to="/deleted">
                        <QuickLinksItem
                            name="deleted"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <TrashIcon size={18} /> Deleted
                        </QuickLinksItem>
                    </Link>
                    <Link to="/demo">
                        <QuickLinksItem
                            name="demo"
                            handleItemClick={handleItemClick}
                            activeItem={activeItem}
                        >
                            <SaveIcon size={18} /> Demo
                        </QuickLinksItem>
                    </Link>
                </Menu.Menu>
            </Menu.Item>
            <BooksSection
                handleItemClick={handleItemClick}
                activeItem={activeItem}
            />
        </MenuStyled>
    );
};

export default Sidebar;
