import React from "react"
import { RegVideo } from "../components/Video"
import video1 from "../assets/videos/pexels-akari-m-5927778.mp4"
import video2 from "../assets/videos/pexels-cottonbro-8262689.mp4"
import video3 from "../assets/videos/pexels-cottonbro-8263450.mp4"
const SlideShow = () => {
  return (
    <div className="slide-wrap slide-paused">
      <div className="main-slide">
        <RegVideo video={video1} />
        <RegVideo video={video2} />
        <RegVideo video={video3} />
      </div>
      <div className="main-slide">
        <RegVideo video={video1} />
        <RegVideo video={video2} />
        <RegVideo video={video3} />
      </div>
      <div className="main-slide">
        <RegVideo video={video1} />
        <RegVideo video={video2} />
        <RegVideo video={video3} />
      </div>
    </div>
  )
}

export default SlideShow
