import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: {},
  user: {},
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.data = action.payload
    },
    setUser(state, action) {
      state.user = action.payload
    },
  },
})

export default slice.reducer

export const setMovie = slice.actions
