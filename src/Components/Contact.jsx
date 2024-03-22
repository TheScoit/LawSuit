import React from 'react'
import './Contact.css'
import { Button } from '@mui/material'


const Contact = () => {
  return (
    <div>
      <div className="contact__page">
        <div className="image">
            <img src="https://www.cbalaw.org/Portals/COLUMBUS/Images/services/phonecall.jpg" alt="" />
        </div>
        <div className="info">
            <h1>Free Consultant</h1>
            <h5>Book a Appointment</h5>
            <form action="/submit">
                <input type="text" placeholder='Name' name='name' className='Name'/>
                <input type="text" placeholder='Email' name='email' className='email'/>
                <input type="text" placeholder='Contact' name='contact' className='contact'/>
                <input type="text" placeholder='Message' name='message' className='message'/>
                <Button className='btn' variant='outlined'>Submit</Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
