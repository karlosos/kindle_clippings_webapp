import { screen } from '@testing-library/react';
import React from 'react';

import { clippingsSimple } from '../../../../tests_utils/fixtures/clippings-simple';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';
import HighlightsPage from './HighlightsPage';

describe('Highlights Page', () => {
    it('WHEN component rendered THEN page title is visible', () => {
        // WHEN
        renderComponent();

        // THEN
        expect(screen.getByText(/All highlights/)).toBeInTheDocument();
    });

    it('WHEN component rendered THEN all highlights are visible', () => {
        // WHEN
        renderComponent();

        // THEN
        expect(screen.getAllByText(/Mitologia/i)).toHaveLength(1);
        expect(screen.getAllByText(/Chłopi/i)).toHaveLength(3);
        screen.getByText(
            'Antek ino na swoją stronę ciągnie, kowal też wypatruje, aby co chycić, a Józka? Skrzat głupi, któremu plewy jeszcze we łbie, co i nie dziwota, bo dzieusze mało co na dziesiąty rok idzie... Hanka kiej ta ćma łazi, a choruje jeno, i tyle zrobi, co ten pies zapłacze...',
        );
    });

    function renderComponent() {
        return renderWithProviders(<HighlightsPage />, {
            reduxState: { clippings: clippingsSimple },
            route: '/highlights',
        });
    }
});
