import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Logo from "./Logo"

import Sidebar from "./Sidebar"

const Header = () => {
  return (
    <header className="site-header">
      <div className="titleContainer">
        <h1 className="site-header__title">
          <Link to="/">Tim Beckett</Link>
        </h1>

        <h2 className="site-header__subtitle">Software Developer</h2>
      </div>
      <Logo />
      <Sidebar />
    </header>
  )
}

export default Header
