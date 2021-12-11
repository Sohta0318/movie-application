import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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

  return (
    <div className="byGenre">
      {tests.map((genre, index) => {
        const genreLower = genre.genre.toLowerCase()
        return (
          <Link
            key={index}
            value={genre.genre}
            to={`/movies/${genreLower}`}
            className="genreLink"
          >
            {genre.genre}
          </Link>
        )
      })}
    </div>
  )
}

export default Genre
