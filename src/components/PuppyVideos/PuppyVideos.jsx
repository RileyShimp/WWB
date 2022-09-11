import React from 'react'
import './PuppyVideos.css'
import EmailModal from '../EmailModal'

import video1 from '../../assets/video/Puppies1.MP4'
import video2 from '../../assets/video/Puppies2.MP4'
import video3 from '../../assets/video/Puppies3.MP4'
import video4 from '../../assets/video/Puppies4.MP4'
import video5 from '../../assets/video/Puppies5.MP4'
import video6 from '../../assets/video/Puppies6.MP4'
import video7 from '../../assets/video/Puppies7.MP4'
import video8 from '../../assets/video/Puppies8.MP4'

import poster1 from '../../assets/img/IMG_8874.jpg'
import poster2 from '../../assets/img/IMG_8872.jpg'
import poster3 from '../../assets/img/IMG_8869.jpg'
import poster4 from '../../assets/img/IMG_8868.jpg'
import poster5 from '../../assets/img/IMG_8870.jpg'
import poster6 from '../../assets/img/IMG_8871.jpg'
import poster7 from '../../assets/img/IMG_8873.jpg'
import poster8 from '../../assets/img/IMG_8875.jpg'

const PuppyVideos = () => {
  return (
    <div>
      <div className='video_container'>
      <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video1}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster1}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video2}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster2}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video3}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster3}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video4}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster4}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video5}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster5}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video6}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster6}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video7}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster7}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
        <div className='puppyVideo'>
        <h1>Available Now</h1>
          <video
            src={video8}
            width='300'
            height='600'
            controls='controls'
            autoPlay={false}
            poster={poster8}
            loop
            muted
          />
          <div className='email_button'> <EmailModal/> </div>
        </div>
      </div>
    </div>
  )
}

export default PuppyVideos