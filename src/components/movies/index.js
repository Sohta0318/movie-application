import React from "react"
import Movie from "./Card"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allTitle {
      nodes {
        data {
          results {
            banner
            image_url
            description
            gen {
              genre
            }
            plot
            rating
            title
            release
            trailer
            year
            imdb_id
          }
        }
        id
      }
    }
  }
`

const AllMovies = ({ setChoice }) => {
  const data = useStaticQuery(query)

  const all = []

  const {
    allTitle: { nodes: details },
  } = data

  details.map(detail => {
    detail.data.map(item => {
      all.push(item.results)
    })
  })

  const singleCard = (movie, index) => {
    return (
      <label key={index}>
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
