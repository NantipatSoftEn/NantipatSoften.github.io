import React, { Fragment } from 'react'

import { getImages } from '../../utils/functions'

const acm = getImages('acm', 1)
const esp8266 = getImages('esp8266', 2)
const achievements = [
  {
    icon: 'certificate',
    variant: 'danger',
    title: 'Joined ACM-ICPC Southern 2016',
    description: (
      <Fragment>
        8 Problem  3 hours  70 team />
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
  }
]

export default achievements.reverse()
