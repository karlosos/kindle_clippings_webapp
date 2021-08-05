import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import ImportPage from './pages/ImportPage'
import DashboardPage from './pages/DashboardPage'
import HighlightsPage from './pages/HighlightsPage'
import FavouritesPage from './pages/FavouritesPage'

function App () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/import'>
            <ImportPage />
          </Route>
          <Route path='/highlights/:bookId/:bookTitle' component={HighlightsPage} />
          <Route path='/highlights' component={HighlightsPage} />
          <Route path='/favourites' component={FavouritesPage} />
          <Route path='/'>
            <DashboardPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
