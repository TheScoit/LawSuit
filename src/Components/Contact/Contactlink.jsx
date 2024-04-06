import React from 'react'
import './Contactlink.css'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
const Contactlink = () => {
    const history = useHistory();
  return (
    <div>
      <div className="contactlink">
            <div className="contactimage">
                <img src="https://www.cbalaw.org/Portals/COLUMBUS/Images/services/phonecall.jpg" alt="" />
            </div>
            <div className="contactinfo">
                <h3>Book a Appointment</h3>
                <h2>Ready to Consult? Contact Us</h2>
                <form className='form'action='/submit'>
                <input type="text" placeholder='Name' name='name' className='__name'/>
                <input type="text" placeholder='Email' name='email' className='__email'/>
                <input type="text" placeholder='Contact' name='contact' className='__contact'/>
                <input type="text" placeholder='Message' name='message' className='__message'/>
                <div className="button2">
                <Button variant='outlined' onClick={()=>history.push('/')}>Submit</Button>
                <Button variant='outlined'>Cancel</Button>        
                </div>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Contactlink
