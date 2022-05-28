import React, { FC } from 'react'
import s from '../Header.module.scss'

const HeaderLogo: FC = () => {

  return (
    <div className={s.logoWrapper}>
      <a href="/">
        <span className={s.logo}>metarians</span>
      </a>
    </div>
  )
}

export default HeaderLogo