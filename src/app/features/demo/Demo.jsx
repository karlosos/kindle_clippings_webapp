import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';

import { setActiveItem } from '../../layout/sidebar/sidebarSlice';
import { clear, loadBackup } from '../clippings/clippingsSlice';
import { HeaderStyled } from './Demo.style';
import { clippings } from './demoClippings';

const ImportPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onDemoLoad = () => {
        dispatch(loadBackup(clippings));
        dispatch(setActiveItem('dashboard'));
        history.push('/dashboard');
    };

    const onClearButtonClick = () => {
        dispatch(clear());
    };

    return (
        <>
            <HeaderStyled as="h1">Demo data</HeaderStyled>
            <p>
                If you want to load demo data and you only want to check how
                this app works, then use the button below.
            </p>
            <Button positive onClick={onDemoLoad}>
                Load demo data
            </Button>

            <Header as="h1">Delete all data</Header>
            <p>
                If you want to delete all local data. This will remove all
                highlights, favourites, etc. There is no going back if you do
                not have a backup.
            </p>
            <Button negative onClick={onClearButtonClick}>
                Delete everything
            </Button>
        </>
    );
};

export default ImportPage;
