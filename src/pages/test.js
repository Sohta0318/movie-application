import React, { useEffect } from "react"
import { getUsers } from "../utils/user"
const Test = () => {
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default Test
