import React, { useEffect, useState } from "react"
import { useAuth } from "gatsby-theme-firebase"
const Favorites = () => {
  const { isLoggedIn } = useAuth()
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
      {isLoggedIn && <></>}
      {/* data.map(data => {
        return <p key={data.imdb_id}>{data.banner}</p>
      }) */}
    </>
  )
}

export default Favorites
