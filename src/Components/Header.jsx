import React from 'react'
import './Header.css'
import { Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useHistory} from 'react-router-dom'


function Header() {
  const history = useHistory();

  return (
    <div className='main'>
      <div className="header">
        <div className="header__left">
        <img src="https://svgsilh.com/svg_v2/450202.svg" alt="" />
        <h1>Know your Right</h1>
        </div>
        <div className="header__right">
            
            <Button variant="text" onClick={() => history.push('/')}>Home</Button><p>|</p>
            <Button variant="text" >Lawyer</Button><p>|</p>
            <Button variant="text">Blog</Button><p>|</p>
            <Button variant="text">About Us</Button><p>|</p>
            <Button variant="text">Contact</Button><p>|</p>
            <div className='account'>
            <AccountCircleIcon className='account__icon'/> 
            <Button variant="text" onClick={() => history.push('/signin')}>Sign in</Button>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default Header
