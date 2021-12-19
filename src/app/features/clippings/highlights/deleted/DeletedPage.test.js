import { screen } from '@testing-library/react';
import React from 'react';

import { clippings } from '../../../../tests_utils/fixtures';
import renderWithProviders from '../../../../tests_utils/storeTestProvider';
import DeletedPage from './DeletedPage';

test('Deleted Page', () => {
    const { getByText, getAllByText, debug } = renderWithProviders(
        <DeletedPage />,
        {
            reduxState: { clippings: clippings },
            route: '/highlights',
        },
    );
    expect(screen.getByText(/Highlights/i)).toBeInTheDocument();
    expect(getAllByText(/Chłopi/i).length).toBe(1);
    getByText(
        /Antek zaś szatkował nad wielkim cebrem przy kominie; rozdziany był, że ostał ino w koszuli i w portkach pasiatych z wełniakowego sukna, rozczerwienił się, łeb mu się rozwichrzył i pot gęsto pokrył mu czoło; tęgo robił, ale śmiał się cięgiem i przekpiwał, a taki był urodny, że Jagna jak w ob raz poglądała, a i nie ona jedna tylko... a on przy stawał, żeby odetchnąć, i wesołym wzrokiem tak patrzał na nią, aż spuszczała oczy i czerwieniła się./i,
    );
});
