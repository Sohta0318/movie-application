import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
const Favorites = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://movie-931e2-default-rtdb.firebaseio.com/movies.json"
      )
      const data = await response.json()
      setData(all => [...all, data])
    }
    fetchData()
  }, [])
  console.log(data)

  //need to be fixed
  //put in one array to map
  return (
    <>
      {/* data.map(data => {
        return <p key={data.imdb_id}>{data.banner}</p>
      }) */}
    </>
  )
}

export default Favorites

export const query = graphql`
  {
    allMovie {
      edges {
        node {
          title
        }
      }
    }
  }
`
