import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useContext } from "react"
import { AiOutlineFolderView } from "react-icons/ai"
import { State } from "../../pages/movies"

const Movie = ({ title, image_url: image }) => {
  const { setPara } = useContext(State)
  const itemRef = useRef()
  const onClickHandler = () => {
    setPara(itemRef.current.innerText)
  }

  return (
    <div onClick={onClickHandler}>
      <img src={image} />
      <p ref={itemRef}>{title}</p>
      <AiOutlineFolderView />
    </div>
  )
}

export default Movie
