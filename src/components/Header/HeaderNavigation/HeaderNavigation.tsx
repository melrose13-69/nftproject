import React, { FC } from 'react'
import s from '../Header.module.scss'

const HeaderNavigation: FC = () => {

  return (
    <nav className={s.nav}>
      <ul className={s['nav-wrapper']}>
        <li className={s['nav-item']}>coming soon</li>
      </ul>
    </nav>
  )
}

export default HeaderNavigation