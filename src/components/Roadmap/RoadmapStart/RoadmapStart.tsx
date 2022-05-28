import React, { FC } from 'react'
import s from '../Roadmap.module.scss'
import Button from '../Button/Button'
import { RoadmapStartTypes, RoadmapStartView } from '../types'

const RoadmapStart: FC<RoadmapStartTypes> = ({ setView }) => {
  return (
    <div className={s.roadmapStart}>
      <h1>metarians</h1>
      <div className={s.controls}>
        <Button
          text='story'
          className={s.button}
          onClick={(): void => { setView(RoadmapStartView.STORY) }}
        />
        <Button
          text='road map'
          className={`${s.button} ${s.dashed}`}
          onClick={(): void => { setView(RoadmapStartView.ROADMAP) }}
        />
      </div>
    </div>
  )
}

export default RoadmapStart