import React from "react"
import Cards from "../../components/recommend"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import { useAuth } from "gatsby-theme-firebase"

const Recommended = ({ data }) => {
  const { isLoggedIn } = useAuth()
  console.log(data)
  const {
    allStrapiFeature: { nodes: cards },
  } = data
  return (
    <>
      {isLoggedIn && (
        <>
          <Seo title="recommended" />
          <Cards cards={cards} />
        </>
      )}
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
