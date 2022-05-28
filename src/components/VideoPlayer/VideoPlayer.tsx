import React, { createRef, FC, LegacyRef, MutableRefObject, useRef } from 'react'
import s from './VideoPlayer.module.scss'
import { VideoPlayerState } from './types'

const VideoPlayer: FC<VideoPlayerState> = ({ urlMp4, urlWebm, className, objectPosition }) => {

  return (
    <video autoPlay loop muted playsInline className={`${s.video} ${s[className]}`} style={{ objectPosition: `${objectPosition}%` }}>
      <source src={urlWebm} type='video/webm' />
      <source src={urlMp4} type='video/mp4' />
      <track kind="captions" srcLang="en" label="english_captions" />
    </video>
  )
}

export default VideoPlayer
