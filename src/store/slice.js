import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: {},
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.data = action.payload
      // const data = action.payload
      // const all = ({
      //   banner: data.banner,
      //   date: data.created_at,
      //   description: data.description,
      //   genre: data.gen,
      //   image: data.image_url,
      //   plot: data.plot,
      //   rate: data.rating,
      //   release: data.release,
      //   title: data.title,
      //   trailer: data.trailer,
      //   year: data.year,
      // } = {})
      // state.data.push(all)
      // state.data.push(data)
    },
  },
})

export default slice.reducer

export const setMovie = slice.actions
