import React from 'react';
import logo from './logo.svg'
import './App.css'

function Navbar(){
    return(
  <div className='bg-dark text-white  nav-header'>
  <img src={logo} width={100}></img>
  <h3 className='text-info fs-2 fw-bolder'>ReactFacts</h3>
  <h4 className=' fw-semibold nav-title'>React Course-Project1</h4>
  </div>
  
    )
  }

  export default Navbar