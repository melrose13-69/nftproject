import React, { FC, useState } from 'react'
import s from '../Roadmap.module.scss'
import Button from '../Button/Button'
import icon from '../../../assets/images/back-arrow.svg'
import RoadmapMapText1 from './RoadmapMapText1'
import RoadmapMapText2 from './RoadmapMapText2'
import { RoadmapMapView, RoadmapMapTypes } from '../types'

const RoadmapMap: FC<RoadmapMapTypes> = ({ onReturnClick }) => {
  const [view, setView] = useState<RoadmapMapView>(RoadmapMapView.TEXT1)

  const returnToHandler = (): void => {
    if (view === RoadmapMapView.TEXT1) {
      onReturnClick()
      return
    }

    setView(RoadmapMapView.TEXT1)
  }

  return (
    <div className={s.roadmapMap}>
      <div className={s.blockTitle}>
        <Button
          text='return'
          className={`${s.button} ${s.dashed}`}
          icon={icon}
          onClick={returnToHandler}
        />
        <h2>roadmap v1</h2>
      </div>
      { view === RoadmapMapView.TEXT1 ? <RoadmapMapText1 /> : <RoadmapMapText2 /> }
      { view !== RoadmapMapView.TEXT2 && <div className={s.controls}>

        <Button
          text='see more'
          className={`${s.button} ${s.dashed}`}
          onClick={(): void => { setView(RoadmapMapView.TEXT2) }}
        />
      </div>}
    </div>
  )
}

export default RoadmapMap