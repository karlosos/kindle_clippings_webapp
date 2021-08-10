import React from 'react'
import Layout from './Layout/Layout'

import { Provider } from 'react-redux'
import store from './store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import ImportPage from '../clippings/ImportPage/ImportPage'
import DashboardPage from '../clippings/DashboardPage/DashboardPage'
import HighlightsPage from '../clippings/HighlightsPage/HighlightsPage'
import FavouritesPage from '../clippings/FavouritesPage/FavouritesPage'
import DeletedPage from '../clippings/DeteledPage/DeletedPage'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/import'>
              <ImportPage />
            </Route>
            <Route path='/highlights/:bookId/:bookTitle' component={HighlightsPage} />
            <Route path='/highlights' component={HighlightsPage} />
            <Route path='/favourites' component={FavouritesPage} />
            <Route path='/deleted' component={DeletedPage} />
            <Route path='/'>
              <DashboardPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
