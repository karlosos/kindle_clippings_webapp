import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';

import { loadState } from '../../../localStorage';
import { clear, concat, loadBackup } from '../clippingsSlice';
import DragDropContainer from './DragDropContainer';
import { HeaderStyled } from './ImportPage.style';
import ImportedCount from './ImportedCount';
import { parseFile } from './parseClippings';

const quoteStatistics = (quotes) => {
    const quotesEntries = Object.entries(quotes);
    const books = [...new Set(quotesEntries.map((quote) => quote[1].book))];

    return {
        numHighlights: quotesEntries.length,
        numBooks: books.length,
    };
};

const ImportPage = () => {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({ maxFiles: 1 });

    const quotes = useSelector((state) => state.clippings.quotes);
    const dispatch = useDispatch();
    const setQuotes = (quotes) => {
        dispatch(concat(quotes));
    };

    const backupImportInput = useRef();

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            parseFile(file, setQuotes);
        }
    }, [acceptedFiles]);

    const onClearButtonClick = () => {
        dispatch(clear());
    };

    const onBackupButtonClick = () => {
        const appState = loadState();

        const element = document.createElement('a');
        const file = new Blob([JSON.stringify(appState)], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = `clippings_backup_${dayjs().format(
            'YYYY-MM-DDTHH:mm:ss',
        )}.txt`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    const onBackupImportClick = () => {
        backupImportInput.current.click();
    };

    const onBackupFileChange = () => {
        const file = backupImportInput.current.files[0];

        const reader = new FileReader();
        reader.onload = (event) => {
            const obj = JSON.parse(event.target.result);
            const quotes = obj.clippings.quotes;
            dispatch(loadBackup(quotes));
            backupImportInput.current.value = '';
        };
        reader.readAsText(file);
    };

    return (
        <>
            <HeaderStyled as="h1">Import</HeaderStyled>
            <DragDropContainer
                getRootProps={getRootProps}
                getInputProps={getInputProps}
                isDragActive={isDragActive}
                isDragAccept={isDragAccept}
                isDragReject={isDragReject}
            />
            {quotes !== {} && (
                <ImportedCount highlightsStatistics={quoteStatistics(quotes)} />
            )}
            <Header as="h1">Backup</Header>
            <p>If you want to backup/export all data to .json file.</p>
            <Button positive onClick={onBackupButtonClick}>
                Backup
            </Button>
            <Button onClick={onBackupImportClick}>Import backup</Button>
            <input
                ref={backupImportInput}
                onChange={onBackupFileChange}
                style={{ display: 'none' }}
                type="file"
                id="my_file"
            />

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
