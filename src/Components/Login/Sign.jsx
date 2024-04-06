import React from 'react';
import './Sign.css'
import { BrowserRouter as Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function SignIn() {
  const history = useHistory();
  return (
    <div>
    <div className="signin_container">
      <h2>Legal Sathi</h2>
      <div className="second_line">
      <p>Don't have an account?
      <div className="sign_up">
      <Link path="/signup">SignUp</Link> 
      </div>
      </p>
      <form id="Login_form">
        <label htmlFor="email">Email address</label>
        <input type="text" required/>
        <label htmlFor="password">Password</label>
        <input type="text" required />
        <Button className='btn1' onClick={()=>history.push('/')}>Login</Button>
      </form>
      </div>
      
      <footer>
        <p>©2024 LegalSathi, Inc. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
    
  );
}

export default SignIn;
