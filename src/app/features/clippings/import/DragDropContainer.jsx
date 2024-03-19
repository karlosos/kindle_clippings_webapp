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
    const {
        isDragAccept: $isDragAccept,
        isDragReject: $isDragReject,
        isDragActive: $isDragActive,
        ...props
    } = getRootProps({ isDragActive, isDragAccept, isDragReject });

    return (
        <DropZone
            $isDragActive={$isDragActive}
            $isDragAccept={$isDragAccept}
            $isDragReject={$isDragReject}
            {...props}
        >
            <input {...getInputProps()} />
            <p>Upload MyClippings.txt file</p>
        </DropZone>
    );
};

export default DragDropContainer;
