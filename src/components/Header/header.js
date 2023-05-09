import React from 'react'
import logo from '../../logo.svg'
import './header.css'
function header() {
    const {dropdown,onclick}=''
  return (
    <Container className='Container-box'>
     <h3>Gmail</h3>
     <h3>Images</h3>
    <button  type='text'  onClick={onclick}>{dropdown}</button>
    <img src={logo} className='my-acc' alt='my-acc'></img>
    </Container>
  )
}

export default header