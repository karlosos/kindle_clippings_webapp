/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { DropZone } from './ImportPage.style';

const DragDropContainer = ({
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
}) => {
    return (
        <DropZone
            {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
            <input {...getInputProps()} />
            <p>Upload MyClippings.txt file</p>
        </DropZone>
    );
};

export default DragDropContainer;
