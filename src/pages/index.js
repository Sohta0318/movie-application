import React from "react"
import Seo from "../components/Seo"
import Auth from "../components/auth/auth"

export default function Home() {
  return (
    <>
      <Seo title="SignIn" />
      <Auth />
    </>
  )
}
