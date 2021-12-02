import { configureStore } from "@reduxjs/toolkit"
import firstReducer from "./slice"

const reducer = { first: firstReducer }

const store = configureStore({ reducer })

export default store
