import React from 'react'
import './Contactus.css'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Contactus = () => {
    const history = useHistory();
  return (
    <div>
      <div className='contactus'>   
      <div className="contactimage">
        <img src="https://www.cbalaw.org/Portals/COLUMBUS/Images/services/phonecall.jpg" alt="" />
      </div>
      <div className="contactinfo">
           <h3>Want free Consulation</h3>
           <h4>Book Appointment </h4>
           <form action="/submit" className='form'>
                <input type="text" placeholder='Name' name='name1' className='Name1'/>
                <input type="text" placeholder='Email' name='email1' className='email1'/>
                <input type="text" placeholder='Contact' name='contact1' className='contact1'/>
                <input type="text" placeholder='Message' name='message1' className='message1'/>
                <Button className='btn5' variant='outlined'>Submit</Button>
                <Button className='btn4' variant='outlined' onClick={()=>history.push('/')}>Cancel</Button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
