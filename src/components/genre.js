import React from "react"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { State } from "../pages/movies"

const Genre = () => {
  const [tests, setTests] = useState([])
  const { setOption } = useContext(State)
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://data-imdb1.p.rapidapi.com/genres/",
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "20c32f1212msh2cfff196197bdf5p17f61cjsn450944cdf0ca",
      },
    }
    const Item = async () => {
      const response = await axios.request(options)
      setTests(response.data.results)
    }
    Item()
  }, [])

  // console.log(tests)

  return (
    <div>
      <label htmlFor="pet-select">Choose a genre:</label>

      <select
        name="genres"
        id="genre-select"
        onChange={e => {
          setOption(e.target.value)
        }}
      >
        <option value="">--Please choose a genre--</option>
        {tests.map((genre, index) => {
          return (
            <option key={index} value={genre.genre}>
              {genre.genre}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Genre
