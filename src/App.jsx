import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

import './App.css'
import ImportPage from './pages/ImportPage'
import DashboardPage from './pages/DashboardPage'
import HighlightsPage from './pages/HighlightsPage'


function App () {


  return (
    <Layout>
      {/* <ImportPage /> */}
      {/* <DashboardPage /> */}
      <HighlightsPage />
    </Layout>
  )
}

export default App
