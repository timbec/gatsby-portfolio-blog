import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Logo from "./Logo"; 
import Circle from "./SVG/Circle"


const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__logos">
          <Logo />
          <Circle />
      </div>
      <div className="titleContainer">
        <h1 className="site-header__title">
          <Link to="/">Tim Beckett</Link>
        </h1>

        <h2 className="site-header__subtitle">Software Developer</h2>
      </div>
      {/* <nav>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/about">Contact</Link>
          <Link to="/about">Blog</Link>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header
