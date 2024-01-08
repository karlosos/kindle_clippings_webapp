import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { AppContent } from '../../../../App';
import { clippingsSimple } from '../../../../tests_utils/fixtures/clippings-simple';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';

test('stats are displayed in highlights list', async () => {
    // GIVEN
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });

    // WHEN
    const book = within(screen.getByTestId('books-list')).getByText(
        'Mitologia',
    );
    await userEvent.click(book);

    // THEN
    expect(screen.getByText('1 highlights')).toBeInTheDocument();
    expect(screen.getByText('1 minute')).toBeInTheDocument();
});
