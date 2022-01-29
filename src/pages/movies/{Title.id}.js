import React from "react"
import { graphql } from "gatsby"
import Movie from "../../components/movies/Card"

const EachGenre = ({ data }) => {
  const {
    title: { data: movies },
  } = data
  const singleCard = movie => {
    return (
      <label key={movie.imdb_id}>
        <input type="radio" value={JSON.stringify(movie.results)}></input>
        <Movie {...movie.results} />
      </label>
    )
  }
  return (
    <>
      <h1>{data.title.id}</h1>
      <div className="movies-list">
        {movies.map(movie => {
          return singleCard(movie)
        })}
      </div>
    </>
  )
}

export const query = graphql`
  query eachGenre($id: String) {
    title(id: { eq: $id }) {
      data {
        results {
          description
          gen {
            genre
          }
          banner
          image_url
          imdb_id
          plot
          rating
          year
          trailer
          title
        }
      }
      id
    }
  }
`

export default EachGenre
