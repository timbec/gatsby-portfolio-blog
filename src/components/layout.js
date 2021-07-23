import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"


import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/stylesheets/styles.scss";

const Layout = ({ children, pageName }) => {
  let className = ""

  if (pageName) {
    className = `${className} page-${pageName}`
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Tim Beckett Portfolio</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
