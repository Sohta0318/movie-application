import React, { useEffect, useState, useRef } from "react"
import { useAuth } from "gatsby-theme-firebase"
import { Link } from "gatsby"
const Favorites = () => {
  const [BgImg, setBgImg] = useState("")
  const dataRef = useRef()
  const { isLoggedIn, profile } = useAuth()
  const id = profile?.uid
  const name = profile?.displayName
  const token = localStorage.getItem("token")
  const [data, setData] = useState({})
  const obj = []
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://test-d8d3f-default-rtdb.firebaseio.com/movies.json`
      )
      const data = await response.json()
      setData(data)
    }
    fetchData()
  })

  for (const i in data) {
    obj.push(data[i])
  }

  console.log(obj)

  return (
    <>
      {isLoggedIn && (
        <div
          className="favorite"
          ref={dataRef}
          style={{
            backgroundImage: "url(" + BgImg + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "contain",
            // opacity: "0.6",
          }}
        >
          {obj.map(data => {
            return (
              <div
                key={data.id}
                className="favoriteCard"
                onMouseEnter={() => setBgImg(data.banner)}
              >
                <Link to={data.trailer} className="favorite-p">
                  {data.title}
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Favorites
