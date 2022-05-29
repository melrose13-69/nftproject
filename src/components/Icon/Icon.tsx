import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconState } from './types'

const Icon: FC<IconState> = ({ className, icon, link }) => {

  return (
    <>
      { link
        ? <a className={className} href={link.to} target={link.target || '_blank'}>
          <FontAwesomeIcon icon={icon}/>
        </a>
        : <FontAwesomeIcon className={className} icon={icon}/>
      }
    </>
  )
}

export default Icon