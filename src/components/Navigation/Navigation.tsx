import React, { FC } from 'react'
import s from './Navigation.module.scss'
import { NavigationProps } from './types'

const Navigation: FC<NavigationProps> = ({ navigation, className }) => {

  return (
    <nav className={`${s.nav} ${className}`}>
      <ul className={s.navWrapper}>
        {
          navigation.map((n, i) =>
            <li key={i} className={`${s.navItem} ${n.href ? s.link : s.text}`}>
              {n.href ? <a href={n.href} target='_blank' rel="noreferrer"> { n.text } </a> : n.text}
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navigation