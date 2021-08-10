import React from 'react'
import './index.css'
import { Form,Button,Image } from 'react-bootstrap'
import {useState} from 'react'
import Loading from'./Loading'
import { BrowserRouter as  Router , Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Phone from './Phone'
import Picture from './Picture'
import pic from './Assets/greentick1_4x.png'
import pic1 from './Assets/greentick2_4x.png'
import pic2 from './Assets/Packazoid_(4).png'
import pic3 from './Assets/Packazoid_(3).png'

const App = () => {
 

  
  return (
    <>
   <Router>
     <Image src={pic2} className='img'/>
     <Route path='/'  component={Phone} exact/>
     <Route path='/Image' component={Picture}/>
     
   </Router>
    </>
  )
}

export default App

