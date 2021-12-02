import { Link } from "gatsby"
import React from "react"
import links from "../constants/links"

const Navbar = () => {
  return (
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
  )
}

export default Navbar
