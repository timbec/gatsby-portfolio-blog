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
