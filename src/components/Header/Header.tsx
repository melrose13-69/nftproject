import React, { FC } from 'react'
import s from './Header.module.scss'
import HeaderCommunity from './HeaderCommunity/HeaderCommunity'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'

const Header: FC= () => {

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <HeaderNavigation />
          <HeaderLogo />
          <HeaderCommunity />
        </div>
      </div>
    </header>
  )
}

export default Header