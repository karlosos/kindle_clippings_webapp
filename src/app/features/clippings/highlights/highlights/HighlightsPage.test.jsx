import { screen } from '@testing-library/react';
import React from 'react';

import { clippings } from '../../../../tests_utils/fixtures';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';
import HighlightsPage from './HighlightsPage';

test('Highlights Page', () => {
    const { getByText, getAllByText } = renderWithProviders(
        <HighlightsPage />,
        {
            reduxState: { clippings },
            route: '/highlights',
        },
    );
    expect(screen.getByText(/Highlights/i)).toBeInTheDocument();
    expect(getAllByText(/Chłopi/i)).toHaveLength(3);
    getByText(
        'Antek ino na swoją stronę ciągnie, kowal też wypatruje, aby co chycić, a Józka? Skrzat głupi, któremu plewy jeszcze we łbie, co i nie dziwota, bo dzieusze mało co na dziesiąty rok idzie... Hanka kiej ta ćma łazi, a choruje jeno, i tyle zrobi, co ten pies zapłacze...',
    );
});
