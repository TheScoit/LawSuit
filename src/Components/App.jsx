import { useState ,useEffect } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Service from './Service'
import Lawyer from './Lawyer'
import Contact from './Contact'
import Footer from './Footer/Footer'
import Sign from './SignUp/Sign'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'


function App() {
  
  

  return (
    <div className='App'>
      
      <Router>

      <Header/>
      <Switch>

      <Route path='/'>
      <Content/>

      <Service/>

      <Lawyer />

      <Contact/>
      </Route>
     
      <Route path='/signin'>
        <Sign/>
      </Route>

      </Switch>

<Footer/>
      </Router>
   


    </div>
  )
}

export default App
