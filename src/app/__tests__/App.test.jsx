import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { AppContent } from '../App';
import { clippingsSimple } from '../tests_utils/fixtures/clippings-simple';
import renderWithProviders from '../tests_utils/storeTestProvider';

test('App dashboard', () => {
    const { getAllByText } = renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });
    expect(getAllByText(/Chłopi/i)).toHaveLength(2); // sidebar and books list
    expect(getAllByText('Mitologia')).toHaveLength(2); // sidebar and books list
});

test('Clear all data', async () => {
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });
    const leftClick = { button: 0 };
    // go to import page
    await userEvent.click(screen.getByText(/import/i), leftClick);
    // check if there are books on sidebar
    expect(screen.getAllByText(/Chłopi/i)).toHaveLength(1); // sidebar and books list
    expect(screen.getAllByText('Mitologia')).toHaveLength(1); // sidebar and books list
    expect(
        screen.getByText(/Upload MyClippings.txt file/i),
    ).toBeInTheDocument();
    // clear data
    await userEvent.click(screen.getByText(/Delete everything/i), leftClick);
    // books sidebar should be empty
    await waitFor(() => {
        expect(screen.queryByText(/Chłopi/i)).not.toBeInTheDocument();
        expect(screen.queryByText('Mitologia')).not.toBeInTheDocument();
    });
    // go back to dashboard page
    await userEvent.click(
        within(screen.getByRole('menu')).getByText(/books/i),
        leftClick,
    );
    expect(screen.queryByText(/Chłopi/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Mitologia')).not.toBeInTheDocument();
});

test('Add to favourites and remove from favourites', async () => {
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });
    const leftClick = { button: 0 };
    // go to highlights and check if there are 2 normal highlights and 2 favourite highlight
    await userEvent.click(screen.getByText(/All Highlights/i), leftClick);
    let likeButtons = screen.getAllByText(/Like/);
    expect(likeButtons).toHaveLength(2);
    let unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(2);
    // go to favourites and check if there is 2 favourite highlights
    await userEvent.click(screen.getByText(/Favorites/i), leftClick);
    unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(2);
    // remove from favourites
    await userEvent.click(unlikeButtons[0], leftClick);
    unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(1);
    // go to highlights and check if there are 4 normal highlights
    await userEvent.click(screen.getByText(/All highlights/i), leftClick);
    likeButtons = screen.getAllByText(/Like/);
    expect(likeButtons).toHaveLength(3);
    unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(1);
    // // add two highlights to favourites
    await userEvent.click(likeButtons[0], leftClick);
    await userEvent.click(likeButtons[1], leftClick);
    likeButtons = screen.getAllByText(/Like/);
    expect(likeButtons).toHaveLength(1);
    unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(3);
    await userEvent.click(screen.getByText(/Favorites/i), leftClick);
    unlikeButtons = screen.getAllByText(/Unlike/i);
    expect(unlikeButtons).toHaveLength(3);
});

test('Add and remove highlights', async () => {
    renderWithProviders(<AppContent />, {
        reduxState: { clippings: clippingsSimple },
        route: '/',
    });
    const leftClick = { button: 0 };
    // go to highlights and check if there are 4 highlights
    await userEvent.click(screen.getByText('All Highlights'), leftClick);
    let deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(4);
    // go to deleted highlights and check if there is 1 deleted
    await userEvent.click(screen.getByText('Deleted'), leftClick);
    let restoreButtons = screen.getAllByText('Restore');
    expect(restoreButtons).toHaveLength(1);
    // restore one highlight
    await userEvent.click(restoreButtons[0], leftClick);
    expect(screen.queryByText('Restore')).not.toBeInTheDocument();
    // go to highlights and check if there are 6 highlights
    await userEvent.click(screen.getByText('All Highlights'), leftClick);
    deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(5);
    // delete highlights
    await userEvent.click(deleteButtons[2], leftClick);
    deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(4);
    // go to deleted highlights and check if there are 3 deleted
    await userEvent.click(screen.getByText('Deleted'), leftClick);
    restoreButtons = screen.getAllByText('Restore');
    expect(restoreButtons).toHaveLength(1);
});
