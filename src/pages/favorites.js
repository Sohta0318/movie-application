import React, { useEffect, useState, useRef } from "react"
import { useAuth } from "gatsby-theme-firebase"
const Favorites = () => {
  const [BgImg, setBgImg] = useState("")
  const dataRef = useRef()
  const { isLoggedIn, profile } = useAuth()
  const id = profile?.uid

  const [data, setData] = useState({})
  const obj = []
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://test-d8d3f-default-rtdb.firebaseio.com/movies/${id}.json`
      )
      const data = await response.json()
      setData(data)
    }
    fetchData()
  })

  for (const i in data) {
    obj.push(data[i])
  }

  function filterUniqueItemsById(array) {
    // idを集約した配列を作成
    const itemIds = array.map(function (item) {
      return item.id
    })
    //
    return array.filter(function (item, index) {
      return itemIds.indexOf(item.id) === index
    })
  }
  const uniqueItems = filterUniqueItemsById(obj)

  return (
    <>
      {isLoggedIn && (
        <div
          className="favorite"
          ref={dataRef}
          style={{
            backgroundImage: "url(" + BgImg + ")",
          }}
        >
          {uniqueItems.map(data => {
            return (
              <div
                role="none"
                key={data.id}
                className="favoriteCard"
                onMouseEnter={() => setBgImg(data.banner)}
              >
                <a href={data.trailer} className="favorite-p">
                  {data.title}
                </a>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Favorites
