import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import BooksList from '../components/Dashboard/BooksList'

const DashboardPage = () => {
  return (
    <>
      <Header as='h1'>Dashboard</Header>
      <BooksList />
    </>
  )
}

export default DashboardPage
