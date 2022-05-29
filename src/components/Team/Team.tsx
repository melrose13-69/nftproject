import React, { FC } from 'react'
import s from './Team.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import finalVideoMp4 from '../../assets/video/final.mp4'
import finalVideoWebm from '../../assets/video/final.webm'
import Member from './Member/Member'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import manLogo from '../../assets/images/man.png'
import girlLogo from '../../assets/images/girl.png'
import Footer from '../Footer/Footer'

const Team: FC = () => {

  return (
    <section className={s.team}>
      <VideoPlayer
        urlMp4={finalVideoMp4}
        urlWebm={finalVideoWebm}
        className='final'
      />
      <Footer />
    </section>
  )
}

export default Team
