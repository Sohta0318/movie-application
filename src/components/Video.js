import React from "react"
import styled from "styled-components"

const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

export const RegVideo = ({ video }) => {
  return (
    <RegVideoWrapper>
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 45vh;
  position: relative;
  margin-bottom: 2rem;
  transition: all 0.2s;
  margin: 9em;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover {
      transform: translateY(-20px);
      border-radius: 0 10%;
      box-shadow: 0 3px 10px 0 #333;
      opacity: 0.8;
      cursor: pointer;
    }
  }
`

const IframeVideoWrapper = styled.div`
  width: 40vw;
  max-width: 700px;
  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }
  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default Video

// <iframe width="560" height="315" src="https://www.youtube.com/embed/99k3u9ay1gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
