import React from "react"
import { Link } from "gatsby"

const Genre = () => {
  return (
    <div>
      <Link to="/movies/genre" className="choose">
        Choose by Genre
      </Link>
    </div>
  )
}

export default Genre
