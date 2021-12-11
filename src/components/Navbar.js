import { Link } from "gatsby"
import React from "react"
import links from "../constants/links"
import linksForAuth from "../constants/linksForAuth"
import { useAuth } from "gatsby-theme-firebase"

const Navbar = () => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      {!isLoggedIn && (
        <nav className="navbar">
          <div>
            <div className="nav-links">
              {linksForAuth.map(link => {
                return (
                  <Link to={link.url} key={link.id} className="links">
                    {link.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      )}
      {isLoggedIn && (
        <nav className="navbar">
          <div>
            <div className="nav-links">
              {links.map(link => {
                return (
                  <Link to={link.url} key={link.id} className="links">
                    {link.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar
