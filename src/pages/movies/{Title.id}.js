import React from "react"
import { graphql } from "gatsby"

const ByGenre = ({ data }) => {
  const {
    title: { data: detail },
  } = data
  console.log(detail)
  return <div></div>
}

export const query = graphql`
  query GetTitle($id: String) {
    title(id: { eq: $id }) {
      data {
        results {
          description
          gen {
            genre
          }
          image_url
          plot
          rating
          title
          trailer
          year
        }
      }
    }
  }
`

export default ByGenre
