import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

import './App.css'
import ImportPage from './pages/ImportPage'
import DashboardPage from './pages/DashboardPage'


function App () {


  return (
    <Layout>
      {/* <ImportPage /> */}
      <DashboardPage />
    </Layout>
  )
}

export default App
