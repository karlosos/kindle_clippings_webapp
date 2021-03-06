import { configureStore } from '@reduxjs/toolkit';

import clippingsReducer from './features/clippings/clippingsSlice';
import sidebarReducer from './layout/sidebar/sidebarSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        clippings: clippingsReducer,
        sidebar: sidebarReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    // This saves the state to localStorage on every state change
    saveState({
        clippings: store.getState().clippings,
    });
});

export default store;
