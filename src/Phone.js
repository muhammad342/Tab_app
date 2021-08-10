import React from 'react'
import { Form,Button } from 'react-bootstrap'
import {useState} from 'react'
import Loading from'./Loading'
import {LinkContainer} from 'react-router-bootstrap'

const Phone = () => {
    const[Phone,setPhone]=useState();
    const[loading,setLoading]=useState(true);
    const HandleSubmit=(e)=>{
      e.preventDefault();
     
          setPhone(Phone)
          setPhone('')
          setLoading(false)
      
        
     
      
      
    }
    return (
        <>
          <main >
     <h1 >Enter Phone Number</h1> 
     <Form >
     <Form.Control size="lg" type="text" placeholder="Phone number"  value={Phone} onChange={(e)=>{setPhone(e.target.value)}} />
     <Button variant="primary" type="submit" onClick={HandleSubmit}>
    Submit
  </Button>
  <LinkContainer to='/Image'>
  <Button variant='primary' type='submit'>Next</Button>
  </LinkContainer>
     </Form>
    
     </main>
     <aricle className='loading'>
     <h1> {loading ? '' : <Loading/>}</h1>
     </aricle>   
        </>
    )
}

export default Phone
