import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'

import '@testing-library/jest-dom'

import {LocationDisplay} from './app'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>,
  )
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Import/i), leftClick)

  expect(screen.getByText(/Import/i)).toBeInTheDocument()
})
