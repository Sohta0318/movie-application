import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

const query = graphql`
  {
    allGenre {
      nodes {
        data {
          results {
            genre
          }
        }
      }
      totalCount
    }
  }
`

const Genre = () => {
  const data = useStaticQuery(query)
  const {
    allGenre: { nodes },
  } = data
  const tests = nodes[0].data.results

  const classes = useStyles()

  return (
    <div className="byGenre">
      {tests.map((genre, index) => {
        const genreLower = genre.genre.toLowerCase()
        return (
          <div className={classes.root}>
            <Button variant="contained">
              <Link
                key={index}
                value={genre.genre}
                to={`/movies/${genreLower}`}
                className="genreLink"
              >
                {genre.genre}
              </Link>
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default Genre
