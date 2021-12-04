import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase"
import { navigate } from "gatsby"
import React from "react"
import { useDispatch } from "react-redux"
import { setMovie } from "../../store/slice"
import { useSelector } from "react-redux"

const Auth = () => {
  const { isLoggedIn } = useAuth()
  // const dispatch = useDispatch()
  // const user = useSelector(state => state.first.user)
  // console.log(user)
  // console.log(isLoggedIn)

  return (
    <>
      {!isLoggedIn && (
        <SocialLogins
          onSuccess={user => {
            // console.log(user);
            // dispatch(setMovie.setUser(user))
            navigate(`/home`)
          }}
        />
      )}
      {isLoggedIn && <button onClick={() => auth.signOut()}>Log out</button>}
    </>
  )
}

export default Auth
