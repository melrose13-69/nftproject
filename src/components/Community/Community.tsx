import React, { FC } from 'react'
import s from './Community.module.scss'
import Icon from '../Icon/Icon'
import { CommunityProps } from './types'

const Community: FC<CommunityProps> = ({ community, className }) => {

  return (
    <div className={`${s.community} ${className}`}>
      {community.map((c, i) =>
        <Icon className={s.communityIcon} key={i} icon={c.icon} link={c.link} />
      )}
    </div>
  )
}

export default Community