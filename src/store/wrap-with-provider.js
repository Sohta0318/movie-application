import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Layout from "../components/Layout"
import AuthProvider from "../context/auth"
import "firebase/auth"

export default ({ element, props }) => (
  <AuthProvider>
    <Provider store={store}>
      <Layout {...props}>{element}</Layout>
    </Provider>
  </AuthProvider>
)
