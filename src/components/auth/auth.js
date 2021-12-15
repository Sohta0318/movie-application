import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase"
import { navigate } from "gatsby"
import React from "react"

const Auth = () => {
  const { isLoggedIn } = useAuth()

  const onClick = () => {
    auth.signOut()
    localStorage.removeItem("token")
  }

  return (
    <>
      {!isLoggedIn && (
        <SocialLogins
          onSuccess={user => {
            localStorage.setItem("token", user.credential.idToken)
            navigate(`/home`)
          }}
        />
      )}
      {isLoggedIn && <button onClick={onClick}>Log out</button>}
    </>
  )
}

export default Auth
