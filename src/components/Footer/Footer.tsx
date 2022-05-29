import React, { FC } from 'react'
import s from './Footer.module.scss'
import Navigation from '../Navigation/Navigation'
import Community from '../Community/Community'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer: FC = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <Navigation navigation={[{ text: 'Terms and Conditions', href: 'https://www.aperians.com/terms_and_conditions' }]} />
          <div className={s.copyrightWrapper}>
            <span className={s.country}>
              Metarians Miami | Los Angeles
            </span>
            <span className={s.copyright}>
              Copyright { year } METARIANS-All Rights Reserved
            </span>
          </div>
          <Community
            className={s.community}
            community={[{ icon: faTwitter, link: { to: '/' } }, { icon: faInstagram, link: { to: '/' } }]}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer