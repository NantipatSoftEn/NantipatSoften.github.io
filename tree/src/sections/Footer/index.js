import React from 'react'
import FontAwesome from 'react-fontawesome'

const Credit = () => (
  <p className='text-secondary container content-container text-center text-md-right'>
    <FontAwesome name='code' /> with <FontAwesome name='heart' />
    {' '} by Nantipat Tullwattana
    <br />
    <small>Last updated: 4<sup>th</sup> August 2018</small>
  </p>
)

export default Credit
