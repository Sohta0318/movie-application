import React, { useState, useContext, useEffect } from "react"
import Movie from "./Card"
import axios from "axios"
import { State } from "../../pages/movies"

const AllMovies = ({ setChoice }) => {
  const [movies, setMovies] = useState([])
  const [all, setAll] = useState([])
  const { option } = useContext(State)

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/movie/byGen/${option}/`,
      params: { page_size: "100" },
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "20c32f1212msh2cfff196197bdf5p17f61cjsn450944cdf0ca",
      },
    }

    const Item = async () => {
      const response = await axios.request(options)

      setMovies(response.data.results)
    }
    Item()
  }, [option])

  useEffect(() => {
    setAll([])
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

      const Item = async () => {
        const response = await axios.request(options2)
        setAll(all => [...all, response.data.results])
      }
      Item()
    })
  }, [movies])

  const singleCard = movie => {
    return (
      <label key={movie.imdb_id}>
        <input type="radio" value={JSON.stringify(movie)}></input>
        <Movie {...movie} />
      </label>
    )
  }
  return (
    <div className="movies-list" onChange={e => setChoice(e.target.value)}>
      {all.map(movie => {
        return singleCard(movie)
      })}
    </div>
  )
}

export default AllMovies
