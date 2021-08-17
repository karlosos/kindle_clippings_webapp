import React from 'react'
import Layout from './Layout/Layout'

import { Provider } from 'react-redux'
import store from './store'

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import ImportPage from '../clippings/ImportPage/ImportPage'
import DashboardPage from '../clippings/DashboardPage/DashboardPage'
import HighlightsPage from '../clippings/HighlightsPage/HighlightsPage'
import FavouritesPage from '../clippings/FavouritesPage/FavouritesPage'
import DeletedPage from '../clippings/DeteledPage/DeletedPage'
import Demo from '../Demo/Demo'

const AppContent = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/import'>
          <ImportPage />
        </Route>
        <Route path='/highlights/:bookId/:bookTitle' component={HighlightsPage} />
        <Route path='/highlights' component={HighlightsPage} />
        <Route path='/favourites' component={FavouritesPage} />
        <Route path='/deleted' component={DeletedPage} />
        <Route path='/demo' component={Demo} />
        <Route path='/'>
          <DashboardPage />
        </Route>
      </Switch>
    </Layout>
  )
}

function App () {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  )
}

export default App
export { AppContent }
