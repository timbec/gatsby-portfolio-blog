/*
/**
 * 
 * Nav component that provides basic layout for all pages. 
 *
 */
import React from "react"
import { Fragment } from "react"
import { Link } from "gatsby"

import Circle from "../SVG/Circle"

// import { rhythm } from "../../utils/typography"

// import "./nav.scss"

const NavBar = () => {
  const closeNav = () => {
    document.body.classList.remove("nav-open")
  }

  return (
    <Fragment>
      {/* <Circle /> */}
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                className="navigation__item--link"
                to="/"
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__item--link"
                to="/#portfolio"
                onClick={closeNav}
              >
                Portfolio
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                className="navigation__item--link"
                to="/about"
                onClick={closeNav}
              >
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__item--link"
                to="/blog"
                onClick={closeNav}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}

export default NavBar
