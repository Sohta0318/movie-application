import React from "react"
import Seo from "../components/Seo"
import SlideShow from "../components/SlideShow"
import { useAuth } from "gatsby-theme-firebase"

const Home = () => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      {isLoggedIn && (
        <>
          <Seo title="Home" />
          <SlideShow />
        </>
      )}
    </>
  )
}

export default Home
