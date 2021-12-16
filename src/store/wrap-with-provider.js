import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Layout from "../components/Layout"

const Wrapper = ({ element, props }) => (
  <Provider store={store}>
    <Layout {...props}>{element}</Layout>
  </Provider>
)

export default Wrapper
