import React from 'react'
import renderWithProviders from '../../../../tests_utils/storeTestProvider'
import FavouritesPage from './FavouritesPage'
import { screen } from '@testing-library/react'
import { clippings } from '../../../../tests_utils/fixtures'

test('Favourites Page', () => {
  const { getByText, getAllByText, debug } = renderWithProviders(<FavouritesPage />, {
    reduxState: { clippings: clippings },
    route: '/highlights'
  })
  expect(screen.getByText(/Highlights/i)).toBeInTheDocument()
  expect(getAllByText(/Chłopi/i).length).toBe(1)
  getByText('Antek ino na swoją stronę ciągnie, kowal też wypatruje, aby co chycić, a Józka? Skrzat głupi, któremu plewy jeszcze we łbie, co i nie dziwota, bo dzieusze mało co na dziesiąty rok idzie... Hanka kiej ta ćma łazi, a choruje jeno, i tyle zrobi, co ten pies zapłacze...')
})
