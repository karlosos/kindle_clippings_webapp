import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-right: 16px;
    padding-top: 16px;

    p {
        color: rgb(37, 56, 52);
    }
`;

export const HeaderStyled = styled(Header)`
    user-select: none;
    padding-top: 8px;
    color: rgb(37, 56, 52);
`;

const getColorDropZoneBorderColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
};

export const DropZone = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 8px;
    border-color: ${(props) => getColorDropZoneBorderColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
`;
