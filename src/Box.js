import React, { useEffect } from 'react'
import { Form,Button } from 'react-bootstrap'
import {useState} from 'react'
import Loading from'./Loading'
import {LinkContainer} from 'react-router-bootstrap'
import { useHistory } from 'react-router'


const Box = () => {
  let history=useHistory()
    const[Box,setBox]=useState();
    const[loading,setLoading]=useState(true);
    const HandleSubmit=(e)=>{
      e.preventDefault();
     if(Box){
      setLoading(false) 
      setBox('')
      
        setTimeout(()=>{
        history.push('/Final')

        },1000)
     }
     
     else{
       setLoading(true)
       setBox('')
     }
  
          
        }
        
    
        
 
    return (
        <>
          <main >
     <h1 >Enter Number of Boxes</h1> 
     <Form className='input' >
       <div>
     <Form.Control className='box' size="lg" type="text" placeholder="Box" value={Box} onChange={(e)=>{setBox(e.target.value)}} />
     </div>
  
 
  
     </Form>
     <LinkContainer to='/Final'>
     <Button variant="primary" type="submit" onClick={HandleSubmit}>
    Submit
  </Button>
  </LinkContainer>
     </main>
     <aricle className='loading'>
     <h1> {loading ? '' : <Loading/>}</h1>
     </aricle>   
        </>
    )
}

export default Box
