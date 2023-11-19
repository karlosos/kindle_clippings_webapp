import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 16px);
    border: 1px solid #d0d9db;
    border-radius: 8px;
    box-shadow: 0 0px 20px 0 rgb(34 36 38 / 5%);
    max-width: 1600px;
    margin: 0 auto;

    header {
        background-color: white;
        z-index: 99;
        border-radius: 8px 8px 0px 0px;
    }

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        z-index: 10;

        width: 100%;
        display: flex;
        overflow: hidden;
        background-color: white;
        border-radius: 0px 0px 8px 8px;
    }

    aside {
        flex-shrink: 0;
    }

    article {
        flex-grow: 1;
        overflow: overlay;
        margin-left: 16px;
    }
`;
