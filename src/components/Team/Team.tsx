import React, { FC } from 'react'
import s from './Team.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import finalVideoMp4 from '../../assets/video/final.mp4'
import finalVideoWebm from '../../assets/video/final.webm'
import Member from './Member/Member'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import manLogo from '../../assets/images/man.png'
import girlLogo from '../../assets/images/girl.png'

const Team: FC = () => {
  // TODO not finished
  return (
    <section className={s.team}>
      <VideoPlayer
        urlMp4={finalVideoMp4}
        urlWebm={finalVideoWebm}
        className='final'
      />
      {/*<div className='container'>*/}
      {/*  <div className={s.teamGroup}>*/}
      {/*    <div className={s.teamLine}>*/}
      {/*      <div className={s.group}>*/}
      {/*        <Member src={manLogo} nickname='nickname1' socials={[{ icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={manLogo} nickname='nickname2' socials={[{ icon: faTwitter, to: '/' }, { icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={girlLogo} nickname='nickname3' socials={[{ icon: faTwitter, to: '/' }, { icon: faInstagram, to: '/' }]} />*/}
      {/*      </div>*/}
      {/*      <div className={s.group}>*/}
      {/*        <Member src={manLogo} nickname='nickname4' socials={[{ icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={manLogo} nickname='nickname5' socials={[{ icon: faTwitter, to: '/' }, { icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={manLogo} nickname='nickname6' socials={[{ icon: faTwitter, to: '/' }, { icon: faInstagram, to: '/' }]} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={`${s.teamLine} ${s.center}`}>*/}
      {/*      <div className={s.group}>*/}
      {/*        <Member src={manLogo} nickname='nickname7' socials={[{ icon: faTwitter, to: '/' }, { icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={manLogo} nickname='nickname8' socials={[{ icon: faInstagram, to: '/' }]} />*/}
      {/*        <Member src={manLogo} nickname='nickname9' socials={[{ icon: faInstagram, to: '/' }]} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  )
}

export default Team
