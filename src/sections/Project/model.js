import React, { Fragment } from 'react'
import Tags from '../../utils/tags'
import { getImages } from '../../utils/functions'
const whackamoleImages = getImages('projects/whackamole', 2)
const sprintlogImages = getImages('projects/sprintlog', 2)
const projects = [
  {
    name: 'Senior Project',
    list: [
      {
        name: 'Sprint Log',
        source: {
          name: 'Github',
          site: 'https://github.com/SprintLog'
        },
        tags: [ Tags.laravel ],
        year: <Fragment> 4<sup>th</sup> Year </Fragment>,
        images: sprintlogImages,
        description: (
          <Fragment>
            {`
            I have idea create someting about Software Engineer 
            and I discover research Use Case Points (UCP) 
            so I create system send progress project for student 
            with formula UCP estimate scope time in 1 semester .
           However this project Some parts were not completed.
            `}
          </Fragment>
        )
      }
    ]
  },
  {
    name: 'College',
    list: [
      {
        name: 'Whack A Mole',
        tags: [ Tags.java, Tags.android ],
        year: <Fragment> 1<sup>st</sup> Year </Fragment>,
        images: whackamoleImages,
        description: `
          The game's goal is to tap on the moles to gain points before the
          time is running out. Each mole will have a unique ability,
          for example, the red ones will deduct your points, as well as your
          time. The blue ones give you not much pointes, but it increase your
          time by +1. The orange ones give you a huge amount of points.
        `
      }
    ]
  }
]

export default projects.map(project => ({ ...project, list: project.list.reverse() })).reverse()
