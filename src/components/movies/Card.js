import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(muiBaseTheme => ({
  card: {
    maxWidth: 220,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "100%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
}))

//image_url
const Movie = ({ title, image_url: image, description }) => {
  const classes = useStyles()
  const shorts = description.slice(0, 120) + " ..."
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.content}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          {shorts}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Movie
