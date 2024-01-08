import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { AppContent } from '../../../../App';
import { clippingsMultipage } from '../../../../tests_utils/fixtures/clippings-multipage';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';

test('GIVEN navigated to page 2 and book oepened WHEN back button clicked THEN navigate to page 2', async () => {
    // GIVEN
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsMultipage },
        route: '/',
    });
    expect(screen.queryByText('book-20')).not.toBeInTheDocument();

    // navigate to page 2
    const nextPageButton = screen.getByLabelText('Next item');
    await userEvent.click(nextPageButton);
    expect(screen.getByText('book-20')).toBeInTheDocument();

    // open book
    const book = within(screen.getByTestId('books-list')).getByText('book-21');
    await userEvent.click(book);

    // WHEN
    await userEvent.click(screen.getByText('Go back'));

    // THEN
    expect(screen.getByText('book-20')).toBeInTheDocument();
});
