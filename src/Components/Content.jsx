import React from 'react'
import './Content.css'
import LawyerCareerVideo from '../assets/Lawyer Career Video.mp4'
import { Button } from '@mui/material'

function Content() {
  return (
    <div>
      <div className="main">
        <div className="content">
          <div className="content__left">
          <video autoPlay muted loop src={LawyerCareerVideo}/>
          </div>
          <div className="content__right">
          <h1>Empowering Justice, Upholding Rights: Your Trusted Legal Partner</h1>
          <Button variant='outlined'>Get Legal Advice </Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Content