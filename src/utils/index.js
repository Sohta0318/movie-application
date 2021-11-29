import axios from "axios"
import { useState } from "react"

export const FetchGenre = () => {
  const [state, setState] = useState([])
  const options = {
    method: "GET",
    url: "https://data-imdb1.p.rapidapi.com/genres/",
    headers: {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "20c32f1212msh2cfff196197bdf5p17f61cjsn450944cdf0ca",
    },
  }

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data)
      setState(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
  return state
}
