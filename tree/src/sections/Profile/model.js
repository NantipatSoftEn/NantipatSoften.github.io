import React, { Fragment } from 'react'
import { Link } from 'react-scroll'

const profile = {
  name: 'Nantipat Tullwattana',
  position: 'Software Engineer / Web Developer',
  info: (
    <Fragment>
      Hi, my name is <b><u>Army</u></b>.
      I am currently a Software Engineering student at Prince of Songkla University,
       Phuket Campus.
      I was fascinated by the art of programming,
      which brought me into this challenging field.
      I'm also looking part time jobs.
      If you are interested in me, feel free to{' '}
      <a href='#contact'>
        <Link smooth='easeInOutQuint' to='contact'>
          <b>contact!</b>
        </Link>
      </a>
    </Fragment>
  )
}

export default profile
