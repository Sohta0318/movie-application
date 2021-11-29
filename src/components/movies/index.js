import React, { useState, useContext, useEffect } from "react"
import Movie from "./Card"
import axios from "axios"
import { State } from "../../pages/movies"

const AllMovies = () => {
  const [movies, setMovies] = useState([])
  const item = []
  const [all, setAll] = useState([])
  const { option } = useContext(State)

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/movie/byGen/${option}/`,
      params: { page_size: "50" },
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "20c32f1212msh2cfff196197bdf5p17f61cjsn450944cdf0ca",
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [option])

  // it has to be fixed
  //it renders twice
  useEffect(() => {
    movies.map(movie => {
      const id = movie.imdb_id
      const options2 = {
        method: "GET",
        url: `https://data-imdb1.p.rapidapi.com/movie/id/${id}/`,
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key":
            "20c32f1212msh2cfff196197bdf5p17f61cjsn450944cdf0ca",
        },
      }

      axios
        .request(options2)
        .then(function (response) {
          item.push(response.data.results)
          setAll(item)
        })
        .catch(function (error) {
          console.error(error)
        })
    })
  }, [movies])

  console.log(all)

  return (
    <div className="movies-list">
      {all.map(movie => {
        return <Movie {...movie} key={movie.imdb_id} />
      })}
    </div>
  )
}

export default AllMovies
