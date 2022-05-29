import React, { FC } from 'react'
import s from './Header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import Navigation from '../Navigation/Navigation'
import Community from '../Community/Community'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header: FC= () => {

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Navigation className={s.nav} navigation={[]}/>
          <HeaderLogo />
          <Community
            className={s.community}
            community={[{ icon: faDiscord, link: { to: '/' } }, { icon: faTwitter, link: { to: '/' } }]}
          />
        </div>
      </div>
    </header>
  )
}

export default Header