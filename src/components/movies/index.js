import React, { Fragment, useRef, useState } from "react"
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
  const inputRef = useRef()
  const [match, setMatch] = useState([])
  const [search, setSearch] = useState(false)

  const all = []

  const {
    allTitle: { nodes: details },
  } = data

  details.map(detail => {
    return detail.data.map(item => {
      return all.push(item.results)
    })
  })

  const singleCard = movie => {
    return (
      <label key={movie.imdb_id}>
        <input
          type="radio"
          value={JSON.stringify(movie)}
          style={{ display: "none" }}
        ></input>
        <Movie {...movie} />
      </label>
    )
  }

  // IE11でも使える（Babel + polyfill 未使用）
  function filterUniqueItemsById(array) {
    // idを集約した配列を作成
    const itemIds = array.map(function (item) {
      return item.imdb_id
    })
    //
    return array.filter(function (item, index) {
      return itemIds.indexOf(item.imdb_id) === index
    })
  }
  const uniqueItems = filterUniqueItemsById(all)

  const keyPressHandler = () => {
    const title = inputRef.current.value.trim()
    setMatch(uniqueItems.filter(item => item.title.includes(title)))
    setSearch(true)
  }

  console.log(match)

  return (
    <Fragment>
      <label htmlFor="movie">Search</label>
      <input id="movie" ref={inputRef} onKeyPress={keyPressHandler} />
      {search && (
        <div className="movies-list" onChange={e => setChoice(e.target.value)}>
          {match.map(movie => {
            return singleCard(movie)
          })}
        </div>
      )}
      {!search && (
        <div className="movies-list" onChange={e => setChoice(e.target.value)}>
          {uniqueItems.map(movie => {
            return singleCard(movie)
          })}
        </div>
      )}
    </Fragment>
  )
}

export default AllMovies
