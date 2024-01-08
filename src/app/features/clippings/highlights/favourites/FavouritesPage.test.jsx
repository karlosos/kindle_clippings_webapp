import { screen } from '@testing-library/react';
import React from 'react';

import { clippingsSimple } from '../../../../tests_utils/fixtures/clippings-simple';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';
import FavouritesPage from './FavouritesPage';

describe('Favourites Page', () => {
    it('WHEN component rendered THEN page title is visible', () => {
        // WHEN
        renderComponent();

        // THEN
        expect(screen.getByText(/Favourites/)).toBeInTheDocument();
    });

    it('WHEN component rendered THEN all highlights are visible', () => {
        // WHEN
        renderComponent();

        // THEN
        expect(screen.getAllByText(/Chłopi/i)).toHaveLength(1);
        screen.getByText(
            'Antek ino na swoją stronę ciągnie, kowal też wypatruje, aby co chycić, a Józka? Skrzat głupi, któremu plewy jeszcze we łbie, co i nie dziwota, bo dzieusze mało co na dziesiąty rok idzie... Hanka kiej ta ćma łazi, a choruje jeno, i tyle zrobi, co ten pies zapłacze...',
        );
    });

    function renderComponent() {
        return renderWithProviders(<FavouritesPage />, {
            reduxState: { clippings: clippingsSimple },
            route: '/highlights',
        });
    }
});
