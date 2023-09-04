import Navbar from "../header/appbar";
import flower from '../images/images.jpg'
import './home.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";



const postdata ={
  username:'',
  tittle:'',
  discription:'',
  image:'',
  time:Date()
}
const Create =()=>{
  const handleinputchange=(e)=>{
   
    createpost({...post, [e.target.name] : e.target.value})
    console.log(post)
  }
const[post,createpost]=useState(postdata)
    return <div class='createpostpage'>
        <div class='createpost'>
        <Navbar/>
       <img src={flower} class='imag'  alt='logo' height='100%' width='100%' ></img>
  <div class='form'>
  <div> <label for="file-input">
  <AddCircleIcon />
    </label>
    <input type='file' id='file-input'></input></div>
    <input  type='text' onChange={(e)=>{handleinputchange(e)}} placeholder='Tittle' name="tittle" id='textbox' ></input>
    <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
  </div>
  <textarea id="textarea" onChange={(e)=>{handleinputchange(e)}} placeholder='Discription...' name="discription" rows="4" cols="50">
</textarea>
    </div>
    </div>
}

export default Create;