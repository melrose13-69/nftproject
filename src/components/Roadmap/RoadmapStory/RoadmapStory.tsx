import React, { FC } from 'react'
import s from '../Roadmap.module.scss'
import Button from '../Button/Button'
import icon from '../../../assets/images/back-arrow.svg'
import { RoadmapStoryTypes } from '../types'

const RoadmapStory: FC<RoadmapStoryTypes> = ({ onReturnClick }) => {

  return (
    <div className={s.roadmapStory}>
      <div className={s.blockTitle}>
        <Button
          text='return'
          className={`${s.button} ${s.dashed}`}
          icon={icon}
          onClick={onReturnClick}
        />
        <h2>story:</h2>
      </div>
      <p>
        Humanity, far in the future where the perception of life has changed along with the course of evolution.
        The physical, digital and spiritual world merged into one infinite existence where Metarians are
        the awakened human species leading the way towards the never-ending enlightenment.
      </p>
      <p>
        5,555 Metarians hidein the deepest corners of the 0x world and are patiently waiting to take over the
        spotlight. The keys to the biggest secrets of the universe are hidden behind these magical creatures
        and what happens next is awhole new world of discoveries, tools and adventures in a singular ecosystem.
      </p>
    </div>
  )
}

export default RoadmapStory