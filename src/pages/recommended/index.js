import React from "react"
import Cards from "../../components/recommend"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const Recommended = ({ data }) => {
  console.log(data)
  const {
    allStrapiFeature: { nodes: cards },
  } = data
  return (
    <>
      <Seo title="recommended" />
      <Cards cards={cards} />
    </>
  )
}

export const query = graphql`
  {
    allStrapiFeature {
      nodes {
        title
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        descript
        category {
          id
          tag
        }
        detail
      }
    }
  }
`

export default Recommended
