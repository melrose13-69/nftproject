import React, { FC } from 'react'
import s from './MainContent.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import previewVideoMp4 from '../../assets/video/preview.mp4'
import previewVideoWebm from '../../assets/video/preview.webm'
import Header from '../Header/Header'

const MainContent: FC = () => {

  return (
    <section className={s.preview}>
      <Header />
      <VideoPlayer
        urlMp4={previewVideoMp4}
        urlWebm={previewVideoWebm}
        className='main'
      />
    </section>
  )
}

export default MainContent
