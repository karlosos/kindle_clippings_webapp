import React from 'react'
import renderWithProviders from '../tests_utils/storeTestProvider'
import { screen, waitFor } from '@testing-library/react'
import { clippings, books } from '../tests_utils/fixtures'
import { AppContent } from './App'
import userEvent from '@testing-library/user-event'

test('App dashboard', () => {
  const { getByText, getAllByText, debug } = renderWithProviders(<AppContent />, {
    reduxState: { clippings: clippings, books: books },
    route: '/'
  })
  expect(screen.getAllByText(/Dashboard/i).length).toBe(2) // sidebar and header
  expect(getAllByText(/Chłopi/i).length).toBe(2) // sidebar and books list
  expect(getAllByText('Mitologia').length).toBe(2) // sidebar and books list
})

test('Clear all data', async () => {
  const { debug } = renderWithProviders(<AppContent />, {
    reduxState: { clippings: clippings, books: books },
    route: '/'
  })
  expect(screen.getAllByText(/Dashboard/i).length).toBe(2) // sidebar and header
  const leftClick = { button: 0 }
  // go to import page
  userEvent.click(screen.getByText(/import/i), leftClick)
  // check if there are books on sidebar
  expect(screen.getAllByText(/Chłopi/i).length).toBe(1) // sidebar and books list
  expect(screen.getAllByText('Mitologia').length).toBe(1) // sidebar and books list
  expect(screen.getByText(/Upload MyClippings.txt file/i)).toBeInTheDocument()
  // clear data
  userEvent.click(screen.getByText(/Delete everything/i), leftClick)
  // books sidebar should be empty
  await waitFor(() => {
    expect(screen.queryByText(/Chłopi/i)).not.toBeInTheDocument()
    expect(screen.queryByText('Mitologia')).not.toBeInTheDocument()
  })
  // go back to dashboard page
  userEvent.click(screen.getByText(/dashboard/i), leftClick)
  expect(screen.queryByText(/Chłopi/i)).not.toBeInTheDocument()
  expect(screen.queryByText('Mitologia')).not.toBeInTheDocument()
})

test('Add to favourites and remove from favourites', async () => {
  const { debug } = renderWithProviders(<AppContent />, {
    reduxState: { clippings: clippings, books: books },
    route: '/'
  })
  expect(screen.getAllByText(/Dashboard/i).length).toBe(2) // sidebar and header
  const leftClick = { button: 0 }
  // go to highlights and check if there are 2 normal highlights and 2 favourite highlight
  userEvent.click(screen.getByText(/All highlights/i), leftClick)
  let likeButtons = screen.getAllByText(/Like/)
  expect(likeButtons.length).toBe(2)
  let unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(2)
  // go to favourites and check if there is 2 favourite highlights
  userEvent.click(screen.getByText(/Favorites/i), leftClick)
  unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(2)
  // remove from favourites
  userEvent.click(unlikeButtons[0], leftClick)
  unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(1)
  // go to highlights and check if there are 4 normal highlights
  userEvent.click(screen.getByText(/All highlights/i), leftClick)
  likeButtons = screen.getAllByText(/Like/)
  expect(likeButtons.length).toBe(3)
  unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(1)
  // // add two highlights to favourites
  userEvent.click(likeButtons[0], leftClick)
  userEvent.click(likeButtons[1], leftClick)
  likeButtons = screen.getAllByText(/Like/)
  expect(likeButtons.length).toBe(1)
  unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(3)
  userEvent.click(screen.getByText(/Favorites/i), leftClick)
  unlikeButtons = screen.getAllByText(/Unlike/i)
  expect(unlikeButtons.length).toBe(3)
})

test('Add and remove highlights', async () => {
  const { debug } = renderWithProviders(<AppContent />, {
    reduxState: { clippings: clippings, books: books },
    route: '/'
  })
  expect(screen.getAllByText(/Dashboard/i).length).toBe(2) // sidebar and header
  const leftClick = { button: 0 }
  // go to highlights and check if there are 4 highlights
  userEvent.click(screen.getByText(/All highlights/i), leftClick)
  let deleteButtons = screen.getAllByText(/Delete/)
  expect(deleteButtons.length).toBe(5)
  // go to deleted highlights and check if there is 1 deleted
  userEvent.click(screen.getByText(/Deleted/i), leftClick)
  let restoreButtons = screen.getAllByText(/Restore/)
  expect(restoreButtons.length).toBe(1)
  // restore one highlight
  userEvent.click(restoreButtons[0], leftClick)
  expect(screen.queryByText(/Restore/i)).not.toBeInTheDocument()
  // go to highlights and check if there are 6 highlights
  userEvent.click(screen.getByText(/All highlights/i), leftClick)
  deleteButtons = screen.getAllByText(/Delete/)
  expect(deleteButtons.length).toBe(6)
  // delete highlights
  userEvent.click(deleteButtons[2], leftClick)
  deleteButtons = screen.getAllByText(/Delete/)
  expect(deleteButtons.length).toBe(5)
  // go to deleted highlights and check if there are 3 deleted
  userEvent.click(screen.getByText(/Deleted/i), leftClick)
  restoreButtons = screen.getAllByText(/Restore/)
  expect(restoreButtons.length).toBe(1)
})
