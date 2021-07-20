import React, { Fragment } from 'react'

import Tags from '../../utils/tags'
import { getImages } from '../../utils/functions'

const sprintlogImages = getImages('projects/sprintlog', 2)
const rpgengImages = getImages('projects/RPGENG', 2)
const tondicImages = getImages('projects/Tondic', 1)
const tongtongImages = getImages('projects/tongtong', 2)
const simpleSpringBootImages = getImages('projects/simple-springboot', 2)
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
            I have got some ideas, done a research and discovered Use Case Point formular
            form which I have further  developed a system assisting student to update their 
            progressing project to their professors the scope of 1 semester,  However this 
            within system still under improvement.
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
        source: {
          name: 'Github',
          site: 'https://github.com/NantipatSoftEn/RPGENG'
        },
        tags: [ Tags.react ],
        year: <Fragment> 2<sup>rd</sup> Year </Fragment>,
        images: rpgengImages,
        description: `
        This project is created to memorize English vocabularies system.
        I am passionate about anime Log Horizon; therefore, I have designed
        UI with the animes icon.
        `
      },
      {
        name: 'Tondic',
        source: {
          name: 'Github',
          site: 'https://github.com/NantipatSoftEn/Tondic'
        },
        tags: [ Tags.laravel ],
        year: <Fragment> 3<sup>rd</sup> Year </Fragment>,
        images: tondicImages,
        description: `
        Tondic is a storage catalog girls. True purpose, I test  CRUD laravel
        `
      },
      {
        name: 'TongTong Chicken-rice',
        source: {
          name: 'Link',
          site: 'https://www.tongtong-chickenrice.com'
        },
        tags: [ Tags.node ],
        year: <Fragment> 5<sup>th</sup> Year </Fragment>,
        images: tongtongImages,
        description: `
        TongTong is a brand chicken-rice in Phuket. Which  there are many menu , 
         `
      },
      {
        name: 'Simple Spring boot',
        source: {
          name: 'Link',
          site: 'https://github.com/SimpleProjectArmy/SimpleSpringBoot'
        },
        tags: [ Tags.springboot, Tags.angular ],
        year: <Fragment> between working </Fragment>,
        images: simpleSpringBootImages,
        description: `
         Just simple login register activate-email with protect route project fron-end use Angular and back-end use Springboot 
         `
      }
    ]
  }
]

export default projects.map(project => ({ ...project, list: project.list.reverse() })).reverse()
