import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Layout from "../components/Layout"

export default ({ element, props }) => (
  <Provider store={store}>
    <Layout {...props}>{element}</Layout>
  </Provider>
)
