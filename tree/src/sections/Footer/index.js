import React from 'react'
import FontAwesome from 'react-fontawesome'

const Credit = () => (
  <p className='text-secondary container content-container text-center text-md-right'>
    <FontAwesome name='code' /> with <FontAwesome name='heart' />
    {' '} by Nantipat Tullwattana
    <br />
    <small>Last updated: 20<sup>th</sup> July 2021</small>
  </p>
)

export default Credit
