import React from 'react'
import Layout from './layout/Layout'

import { Provider } from 'react-redux'
import store from './store'

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import ImportPage from './features/clippings/import/ImportPage'
import DashboardPage from './features/clippings/dashboard/DashboardPage'
import HighlightsPage from './features/clippings/highlights/highlights/HighlightsPage'
import FavouritesPage from './features/clippings/highlights/favourites/FavouritesPage'
import DeletedPage from './features/clippings/highlights/deleted/DeletedPage'
import Demo from './features/demo/Demo'

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
