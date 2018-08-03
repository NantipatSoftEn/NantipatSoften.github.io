import React, { Fragment } from 'react'

import { getImages } from '../../utils/functions'

const siriventureImages = getImages('siriventure', 2)

const achievements = [

  {
    icon: 'certificate',
    variant: 'danger',
    title: 'Join ACM-ICPC Southern 2016',
    description: (
      <Fragment>
        Siri Ventures x HUBBA Stadium Hackathon />
      </Fragment>
    ),
    images: siriventureImages.map((image, i) =>
      <img key={i} className='img-fluid' src={image} alt={image} />
    )
  }
]

export default achievements.reverse()
