import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Familiar Impeccable Starling</title>
        <meta property="og:title" content="Familiar Impeccable Starling" />
      </Helmet>
    </div>
  )
}

export default Home
