import React, { FC } from 'react'
import s from '../Roadmap.module.scss'
import { ButtonTypes } from '../types'

const Button: FC<ButtonTypes> = ({ text, icon, className, onClick }) => {

  return (
    <button className={className} onClick={onClick}>
      { icon && <span className={s.buttonIcon} style={{ backgroundImage: `url(${icon})` }}></span>}
      <span className={s.buttonText}>{ text }</span>
    </button>
  )
}

export default Button