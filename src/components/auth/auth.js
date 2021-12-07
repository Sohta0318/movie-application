import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase"
import { navigate } from "gatsby"
import React from "react"

const Auth = () => {
  const { isLoggedIn } = useAuth()

  return (
    <>
      {!isLoggedIn && (
        <SocialLogins
          onSuccess={user => {
            console.log(user)
            navigate(`/home`)
          }}
        />
      )}
      {isLoggedIn && <button onClick={() => auth.signOut()}>Log out</button>}
    </>
  )
}

export default Auth
