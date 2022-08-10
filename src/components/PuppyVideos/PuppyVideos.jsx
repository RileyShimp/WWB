import React from 'react'
import './PuppyVideos.css'
import EmailModal from '../EmailModal'

import video1 from '../../assets/video/Video5.MP4'
import video2 from '../../assets/video/Video6.MP4'
import video3 from '../../assets/video/Video7.MP4'
import video4 from '../../assets/video/Video8.MP4'
import video5 from '../../assets/video/upcoming.MP4'
import poster2 from '../../assets/img/IMG_8081.jpg'
import poster1 from '../../assets/img/IMG_8082.jpg'
import poster4 from '../../assets/img/IMG_8083.jpg'
import poster3 from '../../assets/img/IMG_8084.jpg'
import poster5 from '../../assets/img/upcomingPuppies1.jpg'

const PuppyVideos = () => {
  return (
    <div>
      <div className='video_container'>
      <div className='puppyVideo'>
        <h1>Upcoming Puppies..</h1>
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
          <h3>Platnum Lilac Merle Fluffy Carriers</h3>
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
        <h1> RECENTLY SOLD</h1>
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
        <h1> RECENTLY SOLD</h1>
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
        <h1> RECENTLY SOLD</h1>
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
      </div>
    </div>
  )
}

export default PuppyVideos