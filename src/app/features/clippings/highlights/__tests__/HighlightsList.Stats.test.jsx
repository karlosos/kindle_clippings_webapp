import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { AppContent } from '../../../../App';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';
import { clippingsSimple } from '../../../../tests_utils/fixtures/clippings-simple';

test('GIVEN navigated to page 2 and book oepened WHEN back button clicked THEN navigate to page 2', async () => {
    // GIVEN
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });

    // WHEN
    const book = within(screen.getByTestId('books-list')).getByText('Mitologia');
    await userEvent.click(book);

    // THEN
    expect(screen.getByText('1 highlights')).toBeInTheDocument();
    expect(screen.getByText('1 minute')).toBeInTheDocument();
});
