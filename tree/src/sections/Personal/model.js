import React, { Fragment } from 'react'

const information = [
  {
    title: 'Firstname',
    answer: 'Nantipat'
  },
  {
    title: 'Lastname',
    answer: 'Tullwattana'
  },
  {
    title: 'Nickname',
    answer: 'Army'
  },
  {
    title: 'Birthname',
    answer: 'นันทิพัฒน์ ตุลวรรธนะ'
  },
  {
    title: 'Nationality',
    answer: 'Thai 🇹🇭'
  },
  {
    title: 'Age',
    answer: '22'
  },
  {
    title: 'Language',
    answer: (
      <Fragment>
        {'Thai (Native) 🇹🇭'} <br />
        {'English (Elementary) 🇺🇸'} <br />
      </Fragment>
    )
  },
  {
    title: 'Education',
    answer: 'Prince of Songkla University'
  }
]

export default information
