import React from 'react'
import {Form,Button,Image } from 'react-bootstrap'
import {useState} from 'react'
import Loading from './Loading'


const Picture = () => {
    const [File, setFile] = useState();
    const[loading,setLoading]=useState(true);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const HandleSubmit=(e)=>{
        e.preventDefault();
     
        
        setFile('')
        setLoading(false)
        setIsFilePicked(true)
    }
 
    return (
        <>
        <main>
            <Form.Group controlId="formFile" className="mb-3">
    
    <input type="file" name="file" value={File} onChange={(e)=>{setFile(e.target.value)}} />
    <Button variant='primary' onClick={HandleSubmit}> Upload</Button>
  </Form.Group>
 {isFilePicked ? (<Image src={File} alt='image'/>): ''}
 
  
 
  </main>
  <article className='loading'>
        <h1> {loading ? 'Select a file' : <Loading/>}</h1>  
        </article>

        </>
    )
}

export default Picture
