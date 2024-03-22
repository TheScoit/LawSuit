import { useState ,useEffect } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Service from './Service'
import Lawyer from './Lawyer'
import Contact from './Contact'
import Footer from './Footer/Footer'
import Sign from './Login/Sign'
import Signup from './Signup/Signup'
import Lawyers from './Lawyers/Lawyers'
import Criminal from './Criminal/Criminal'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Bussiness from './Bussiness/Bussiness'
import Insurance from './Insurance/Insurance'
import Family from './Family/Family'
import Drug from './DrugOffense/Drug'
import Employment from './Employment/Employment'
import Property from './Property/Property'



function App() {
  
  

  return (
    <div className='App'>
      
      <Router>

      <Route path='/' exact>
            <Header />

            <Content />
            <Service />
            <Lawyer />
            <Contact />
            <Footer />
            </Route>

        <Route path='/signin'>
            <Sign />
          </Route>   

        <Route path='/signup' >
          <Signup/>
        </Route>
         
         <Route path='/lawyer'>
          <Lawyers/>
         </Route>

          <Route path='/criminal'>
            <Criminal/>
          </Route>

          <Route path='/bussiness'>
            <Bussiness/>
          </Route>

          <Route path='/insurance'>
          <Insurance/>
          </Route>

          <Route path='/family'>
            <Family/>
          </Route>

          <Route path='/drug'>
            <Drug/>
          </Route>
          <Route path='/Employment'>
            <Employment/>
          </Route>

          <Route path='/property'>
            <Property/>
          </Route>

          
      </Router>
   


    </div>
  )
}

export default App

