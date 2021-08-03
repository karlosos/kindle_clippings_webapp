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

function App () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/import'>
            <ImportPage />
          </Route>
          <Route path='/highlights'>
            <HighlightsPage />
          </Route>
          <Route path='/'>
            <DashboardPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
