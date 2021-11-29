import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"

const Card = ({ title, image, descript, category, detail }) => {
  // const { title, image, descript, category, detail } = card
  const slug = slugify(title, { lower: true })
  return (
    <article className="card">
      <div className="card-container">
        <GatsbyImage
          image={getImage(image[0].localFile.childImageSharp)}
          alt={title}
          className="image"
        />
        <div className="card-contents">
          <Link to={`/recommended/${slug}`} className="movie-link">
            {title}
          </Link>
          <p>{descript}</p>
          <p>{detail}</p>
          <div className="category">
            {category.map(cate => {
              return <span key={cate.id}>{cate.tag}</span>
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
