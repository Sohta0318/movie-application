import React from "react"
import { FcClapperboard, FcFilm } from "react-icons/fc"

//image_url
const Movie = ({ title, banner: image, rating }) => {
  return (
    <div>
      <img src={image} alt={title} className="movie-image" />
      <p>{title}</p>
      <div className="icon">
        <div className="rating">
          <FcFilm className="icon-film" />
          <span>{rating}</span>
        </div>
        <button>
          <FcClapperboard />
        </button>
      </div>
    </div>
  )
}

export default Movie
