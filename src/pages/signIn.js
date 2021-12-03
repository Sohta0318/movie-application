import React from "react"
import Seo from "../components/Seo"

const SignIn = () => {
  return (
    <>
      <Seo title="Login" />
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
        </div>

        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default SignIn
