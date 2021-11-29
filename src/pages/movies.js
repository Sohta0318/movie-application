// import { graphql } from "gatsby"
import React, { useState, createContext } from "react"
import AllMovies from "../components/movies"
import Genre from "../components/genre"
export const State = createContext()

const Movies = () => {
  const [option, setOption] = useState()
  const [para, setPara] = useState()
  const value = { option, setOption, para, setPara }
  // const {
  //   allMovie: { nodes: movies },
  // } = data

  return (
    <State.Provider value={value}>
      <>
        <Genre />
        <AllMovies />
      </>
    </State.Provider>
  )
}

// export const query = graphql`
//   {
//     allMovie {
//       nodes {
//         title
//         genre
//       }
//     }
//   }
// `
export default Movies
