import React, { createRef, FC, RefObject, useEffect, useState } from 'react'
import s from './AudioPlayer.module.scss'
import { faPause, faPlay, faVolumeLow, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon/Icon'
import audioSrc from '../../assets/audio/No_name-Breaking_Throughthe_Clouds.mp3'
import { getProgressBarPercent, getTimeLength } from '../../helpers/helpers'

const initialAudioState = { currentTime: '00:00', timeLineBar: '0' }

let audio: HTMLAudioElement
let interval: NodeJS.Timer
let timeLength: string

const AudioPlayer: FC = () => {
  const timeline: RefObject<HTMLDivElement> = createRef()
  const [isPlaying, setPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioState, setAudioState] = useState(initialAudioState)
  const musicStateIcon = isPlaying ? faPause : faPlay
  const volumeIcon = isMuted ? faVolumeMute : faVolumeLow

  const timeLineHandler = (e: React.MouseEvent<Element, MouseEvent>): void => {
    if (timeline.current && audio) {
      const timelineWidth = getComputedStyle(timeline.current).width

      audio.currentTime = e.nativeEvent.offsetX / parseInt(timelineWidth) * audio.duration

      const timeLineBar = getProgressBarPercent(audio.currentTime, audio.duration)
      const currentTime = getTimeLength(audio.currentTime)

      setAudioState({ currentTime, timeLineBar })
    }
  }

  useEffect(() => {
    if (audio) {
      audio.muted = isMuted
    }
  }, [isMuted])

  useEffect(() => {

    if (!isPlaying) {
      audio?.pause()
      clearInterval(interval)
      return
    }

    if (isPlaying && !audio) {
      audio = new Audio(audioSrc)

      audio.addEventListener('loadedmetadata', () => {
        timeLength = getTimeLength(audio.duration)
      })
    }

    audio?.play().then(() => {
      interval = setInterval(() => {
        const currentTime = getTimeLength(audio.currentTime)

        if (timeLength === currentTime) {
          audio.load()
          clearInterval(interval)
          setPlaying(false)
          setAudioState(initialAudioState)
          return
        }

        const timeLineBar = getProgressBarPercent(audio.currentTime, audio.duration)

        setAudioState({ currentTime, timeLineBar })
      }, 1000)
    })
  }, [isPlaying])

  return (
    <div className={s.player}>
      <div className={s.info}>
        <span className={s.name}>No name - Breaking Throughthe Clouds</span>
        <span className={s.time}>
          <span>{ audioState.currentTime } / 02:38</span>
        </span>
      </div>
      <div className={s.sound}>
        <button className={`${s.playContainer} ${s.button}`} onClick={(): void => setPlaying(!isPlaying)}>
          <Icon icon={musicStateIcon}/>
        </button>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          role='button'
          tabIndex={0}
          ref={timeline}
          className={s.timeline}
          onClick={(e: React.MouseEvent<HTMLElement>): void => timeLineHandler(e)}
        >
          <div
            className={s.progress}
            style={{ maxWidth: audioState.timeLineBar }}
          />
        </div>
        <button
          className={`${s.volume} ${s.button}`}
          onClick={(): void => setIsMuted(!isMuted)}
        >
          <Icon icon={volumeIcon}/>
        </button>
      </div>
    </div>
  )
}

export default AudioPlayer