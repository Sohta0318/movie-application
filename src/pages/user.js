import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/auth/profile"

const User = () => {
  return (
    <>
      <Router>
        <Profile path="/user/:uid" />
      </Router>
    </>
  )
}

export default User
