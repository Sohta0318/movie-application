// import { graphql } from "gatsby"
import React, { useState, createContext } from "react"
import AllMovies from "../components/movies"
import Genre from "../components/genre"
import { useDispatch, useSelector } from "react-redux"
import { setMovie } from "../store/slice"

export const State = createContext()

const Movies = () => {
  const favorites = useSelector(state => state.first.data)
  const dispatch = useDispatch()
  const [option, setOption] = useState()
  const [para, setPara] = useState()
  const [choice, setChoice] = useState(null)
  const value = { option, setOption, para, setPara }

  const movie = {
    banner: favorites?.banner,
    date: favorites?.created_at,
    description: favorites?.description,
    genre: favorites?.gen,
    image: favorites?.image_url,
    plot: favorites?.plot,
    rate: favorites?.rating,
    release: favorites?.release,
    title: favorites?.title,
    trailer: favorites?.trailer,
    year: favorites?.year,
    id: favorites?.imdb_id,
  }

  const addHandler = async movie => {
    const response = await fetch(
      "https://movie-931e2-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      }
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    const chosen = JSON.parse(choice)
    dispatch(setMovie.setMovie(chosen))

    addHandler(movie)
  }

  // console.log(movie)
  // console.log(favorites)

  return (
    <State.Provider value={value}>
      <>
        <Genre />
        <form onChange={handleSubmit}>
          <div>
            <AllMovies setChoice={setChoice} />
          </div>
        </form>
      </>
    </State.Provider>
  )
}

export default Movies
