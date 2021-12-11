import React, { useEffect, useState } from "react"
import { useAuth } from "gatsby-theme-firebase"
const Favorites = () => {
  const { isLoggedIn, profile } = useAuth()
  const id = profile?.uid
  const name = profile?.displayName
  const [data, setData] = useState({})
  const obj = []
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://test-d8d3f-default-rtdb.firebaseio.com//movies.json`
      )
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  for (const i in data) {
    obj.push(data[i])
  }

  console.log(obj)

  // when hover title shoe image
  return (
    <>
      {isLoggedIn && (
        <>
          {obj.map(data => {
            return (
              <div key={data.id} className="favoriteCard">
                <p>{data.title}</p>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}

export default Favorites
