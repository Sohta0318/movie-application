import { configureStore } from "@reduxjs/toolkit"
import firstReducer from "./slice"

const reducer = { first: firstReducer }

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export default store
