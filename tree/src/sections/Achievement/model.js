import React, { Fragment } from 'react'

import { getImages } from '../../utils/functions'

const acm = getImages('acm', 1)
const esp8266 = getImages('esp8266', 2)
const workshopBlockchain = getImages('workshop-blockchain', 1)
const Seminar = getImages('seminar', 1)
const achievements = [
  {
    icon: 'certificate',
    variant: 'primary',
    title: ' ACM-ICPC Southern 2016',
    description: (
      <Fragment>
        solve problem programing by algorithm
      </Fragment>
    ),
    images: acm.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'danger',
    title: 'Training Basic ESP8266',
    description: (
      <Fragment>
      Training at SIPA phuket by  Mr. Alongkot kingkaew/>
      </Fragment>
    ),
    images: esp8266.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'info',
    title: 'Workshop Blockchain and Smart Contract for Developers',
    description: (
      <Fragment>
        Workshop basic Blockchain and Smart Contract by Team PSU Blockchain and kulap
      </Fragment>
    ),
    images: workshopBlockchain.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  },
  {
    icon: 'certificate',
    variant: 'warning',
    title: 'FinTech, Crypto currencies and DeFI World Seminar',
    description: (
      <Fragment>
         Talk about FinTech, Crypto currencies and DeFI by Team PSU blockchain and Binance
      </Fragment>
    ),
    images: Seminar.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  }
]

export default achievements.reverse()
