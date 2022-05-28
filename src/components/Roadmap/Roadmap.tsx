import React, { FC, useState } from 'react'
import s from './Roadmap.module.scss'
import RoadmapStart from './RoadmapStart/RoadmapStart'
import { RoadmapStartView } from './types'
import RoadmapStory from './RoadmapStory/RoadmapStory'
import RoadmapMap from './RoadmapMap/RoadmapMap'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import roadmapVideoMp4 from '../../assets/video/roadmap.mp4'
import roadmapVideoWebm from '../../assets/video/roadmap.webm'

const Roadmap: FC = () => {
  const [view, setView] = useState<RoadmapStartView | null>(null)

  return (
    <section className={s.roadmap}>
      <VideoPlayer
        urlMp4={roadmapVideoMp4}
        urlWebm={roadmapVideoWebm}
        className='roadmap'
      />
      <div className={s.roadmapWrapper}>
        <div className={s.roadmapContent}>
          { !view
            ? <RoadmapStart setView={setView}/>
            : view === RoadmapStartView.STORY
              ? <RoadmapStory onReturnClick={(): void => { setView(null) }} />
              : <RoadmapMap onReturnClick={(): void => { setView(null) }} />
          }
        </div>
      </div>
    </section>
  )
}

export default Roadmap