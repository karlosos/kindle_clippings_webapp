import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { setActiveSidebarItem } from '../../layout/sidebar/sidebarSlice';
import { clear, loadBackup } from '../clippings/clippingsSlice';
import { HeaderStyled, Wrapper } from './Demo.style';
import { clippings } from './demoClippings';

const ImportPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDemoLoad = () => {
        dispatch(loadBackup(clippings));
        dispatch(setActiveSidebarItem('dashboard'));
        navigate('/dashboard');
    };

    const onClearButtonClick = () => {
        dispatch(clear());
    };

    return (
        <Wrapper>
            <HeaderStyled as="h1">Demo data</HeaderStyled>
            <p>
                If you want to load demo data and you only want to check how
                this app works, then use the button below.
            </p>
            <Button positive onClick={onDemoLoad}>
                Load demo data
            </Button>

            <HeaderStyled as="h1">Delete all data</HeaderStyled>
            <p>
                If you want to delete all local data. This will remove all
                highlights, favourites, etc. There is no going back if you do
                not have a backup.
            </p>
            <Button negative onClick={onClearButtonClick}>
                Delete everything
            </Button>
        </Wrapper>
    );
};

export default ImportPage;
