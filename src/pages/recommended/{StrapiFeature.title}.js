import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MovieTemplate = ({ data }) => {
  console.log(data)
  const {
    strapiFeature: { category, image, descript, detail, title },
  } = data
  return (
    <>
      <Seo title={title} />
      <main>
        <div className="single-card">
          <GatsbyImage
            image={getImage(image[0].localFile.childImageSharp)}
            alt={title}
            className="single-image"
          />
          <div className="single-card-contents">
            <h2>{title}</h2>
            <p>{descript}</p>
            <p>{detail}</p>
            <div className="category">
              {category.map(cate => {
                return <span key={cate.id}>{cate.tag}</span>
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query GetSingleMovie($title: String) {
    strapiFeature(title: { eq: $title }) {
      category {
        id
        tag
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      descript
      detail
      id
      title
    }
  }
`

export default MovieTemplate
