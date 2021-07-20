import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../assets/images/header-blur.png'

const Jumbotron = styled.div`
  background-image: url(${backgroundImg});
  background-size: auto 100%;
  background-repeat: repeat-x;
`

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

const Name = styled.h1`
  font-size: 4em;
  font-weight: bold;

  @media (max-width: 575px) {
    font-size: 3em;
  }
`

const Header = () => (
  <Jumbotron className='jumbotron jumbotron-fluid'>
    <Title className='container'>
      <Name>Nantipat Army</Name>
      <h4>Software Engineer / Web Developer</h4>
    </Title>
  </Jumbotron>
)

export default Header
