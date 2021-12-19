import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import clippingsReducer from '../features/clippings/clippingsSlice';
import sidebarReducer from '../layout/sidebar/sidebarSlice';

function renderWithProviders(ui, { reduxState = {}, route = '/' }) {
    window.history.pushState({}, 'Test page', route);
    const store = configureStore({
        reducer: {
            clippings: clippingsReducer,
            sidebar: sidebarReducer,
        },
        preloadedState: reduxState,
    });

    return render(<Provider store={store}>{ui}</Provider>, {
        wrapper: MemoryRouter,
    });
}

export default renderWithProviders;
