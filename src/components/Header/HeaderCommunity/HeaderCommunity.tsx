import React, { FC } from 'react'
import s from '../Header.module.scss'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Icon from '../../Icon/Icon'

const HeaderCommunity: FC = () => {

  return (
    <div className={s.community}>
      <Icon className={s['community-icon']} icon={faTwitter} link={{ to: '/' }}/>
      <Icon className={s['community-icon']} icon={faDiscord} link={{ to: '/' }}/>
    </div>
  )
}

export default HeaderCommunity