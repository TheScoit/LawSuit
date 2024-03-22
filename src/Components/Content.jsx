import React from 'react'
import './Content.css'
import LawyerCareerVideo from '../assets/Lawyer Career Video.mp4'
import { Button } from '@mui/material'
import { SiChatbot } from "react-icons/si";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Content() {
  const history = useHistory();
  return (
    <div>
      <div className="main">
        <div className="content">
          <div className="content__left">
          <video autoPlay muted loop src={LawyerCareerVideo}/>
          </div>
          <div className="content__right">
          <h1>Empowering Justice, Upholding Rights: Your Trusted Legal Partner</h1>
          <Button variant='outlined' onClick={()=>history.push('/lawyer')}>Get Legal Advice </Button>
          <a href="https://mediafiles.botpress.cloud/9e91f4a3-cac3-4288-a4fc-c5e7392239cd/webchat/bot.html"><SiChatbot/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content