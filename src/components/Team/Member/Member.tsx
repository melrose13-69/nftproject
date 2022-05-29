import React, { FC, ReactComponentElement, ReactElement } from 'react'
import s from '../Team.module.scss'
import { MemberProps } from '../types'
import Icon from '../../Icon/Icon'

const Member: FC<MemberProps> = ({ src, name, post, socials }) => {

  return (
    <div className={s.member}>
      <div className={s.main}>
        <img className={s.logo} src={src} alt={src}/>
        <div className={s.socials}>
          {socials.map((s, i) =>
            <Icon key={i} icon={s.icon} link={{ to: s.to, target: s.target } }/>
          )}
        </div>
      </div>
      <div className={s.info}>
        <span className={s.name}> { name } </span>
        <span className={s.post}> { post } </span>
      </div>
    </div>
  )
}

export default Member
