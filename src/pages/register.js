import React, { useContext, useState } from "react"
import Seo from "../components/Seo"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { navigate } from "gatsby-link"

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
      setUser(result)
      navigate("/signIn")
    } catch (error) {
      setData({ ...data, error: error.message })
    }
  }
  return (
    <>
      <Seo title="register" />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}

        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default Register
