import React, { useState, useContext, useEffect } from "react"
import Movie from "./Card"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allTitle {
      nodes {
        data {
          results {
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
          }
        }
        id
      }
    }
  }
`

const AllMovies = ({ setChoice }) => {
  const data = useStaticQuery(query)

  const {
    allTitle: { nodes: details },
  } = data

  console.log(details)

  const singleCard = movie => {
    return (
      <label key={movie.id}>
        <input type="radio" value={JSON.stringify(movie)}></input>
        <Movie {...movie} />
      </label>
    )
  }
  return (
    <div className="movies-list" onChange={e => setChoice(e.target.value)}>
      {details.map(movie => {
        return singleCard(movie)
      })}
    </div>
  )
}

export default AllMovies
