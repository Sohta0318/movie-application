import React from "react"
import { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { State } from "../pages/movies"
import { navigate } from "gatsby"
import { useEffect } from "react"

const query = graphql`
  {
    allGenre {
      nodes {
        data {
          results {
            genre
          }
        }
      }
      totalCount
    }
  }
`

const Genre = () => {
  const data = useStaticQuery(query)
  const {
    allGenre: { nodes },
  } = data
  const tests = nodes[0].data.results
  const { setOption, option } = useContext(State)

  useEffect(() => {
    if (option !== undefined) {
      const lower = option.toLowerCase()
      navigate(`/movies/${lower}`)
    }
  }, [option])

  return (
    <div>
      <label htmlFor="pet-select">Choose a genre:</label>

      <select
        name="genres"
        id="genre-select"
        onChange={e => {
          setOption(e.target.value)
          // if (option !== undefined) {
          //   navigate(`/movies/${option}`)
          // }
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
