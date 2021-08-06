import React from 'react'
import { Header } from 'semantic-ui-react'
import BooksList from './BooksList'

const DashboardPage = () => {
  return (
    <>
      <Header as='h1'>Dashboard</Header>
      <BooksList />
    </>
  )
}

export default DashboardPage
