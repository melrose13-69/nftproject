import React, { FC, ReactComponentElement, ReactElement } from 'react'
import s from '../Team.module.scss'
import { MemberProps } from '../types'
import Icon from '../../Icon/Icon'

const Member: FC<MemberProps> = ({ src, socials, nickname }) => {

  return (
    <div className={s.member}>
      <div className={s.content}>
        <img src={src} alt='member'/>
        <div className={s.socials}>
          {
            socials.map(s =>
              <Icon key={s.to + Math.random()} icon={s.icon} link={{ to: s.to, target: s.target }}/>
            )
          }
          { nickname }
        </div>
      </div>
    </div>
  )
}

export default Member
