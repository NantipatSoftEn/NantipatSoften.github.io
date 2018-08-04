import React, { Fragment } from 'react'
import Tags from '../../utils/tags'
import { getImages } from '../../utils/functions'
const sprintlogImages = getImages('projects/sprintlog', 2)
const rpgengImages = getImages('projects/rpgeng', 2)
const tondicImages = getImages('projects/Tondic', 1)
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
        name: 'RPGENG',
        tags: [ Tags.react ],
        year: <Fragment> 2<sup>rd</sup> Year </Fragment>,
        images: rpgengImages,
        description: `
        This project created for remember english vocabulary 
        and I like anime log-horizon , 
        I design UI with icon item game RPG.
        `
      },
      {
        name: 'RPGENG',
        tags: [ Tags.react ],
        year: <Fragment> 3<sup>rd</sup> Year </Fragment>,
        images: tondicImages,
        description: `
        Tondic is a storage catalog girls
        `
      }
    ]
  }
]

export default projects.map(project => ({ ...project, list: project.list.reverse() })).reverse()
