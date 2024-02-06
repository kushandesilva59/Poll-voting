import React from 'react'
import video from '../../assets/sample_video.mp4'
import styles from './videosection.css'

const VideoSection = () => {
  return (
    <div className='v-section'>
      <div className='title-wrapper'>
        <h1 className='q-title'>Would you rather live for the rest of your life in the Arctic or in the Sahara desert?</h1>
      </div>

      <iframe
        className='video'
        height="615"
        src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; 
        
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allowFullScreen>

      </iframe>

      <div className='q-flex-box'>
        <div className='team-wrapper'>
          <p>The Arctic</p>
        </div>

        <div className='team-wrapper'>
          <p>The Sahara Desert</p>
        </div>
      </div>

      <div className='btn-grp'>
        <button className='q-btn'>Comment</button>
        <button className='q-btn'>Share</button>
      </div>


    </div>
  )
}

export default VideoSection