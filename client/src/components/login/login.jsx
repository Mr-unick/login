import './login.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import logo from '../images/logo.png'
import bg from '../images/bg.jpg'
import { Loginuser, Signupuser } from '../../services/api';
import { Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'



function Login({setauth}) {
const navigate=useNavigate()
 // user details 
const userdetail={
  username:'',
  email:'',
  password:''
}
// login  details 

const lodetail={
  username:'',
  password:''
}

// states

const [user,setuser]=useState(userdetail) 
const [login,setlogin]=useState(lodetail)
const [succes,setsucces]=useState([])
const [page,Setpage]=useState('login')  
const [error,seterror] =  useState([])

// login and signup 

  const onvaluechange =(e)=>{
    setuser({...user, [e.target.name] : e.target.value})
  }
  
  const oninputchange =(e)=>{
    setlogin({...login, [e.target.name] : e.target.value})
  }
        
  const Changepage=()=>{
    page==='signup'? Setpage('login') : Setpage('signup');
  }

    // signup api call functiom

const Signup= async()=>{
 let res= await Signupuser(user)
 if(res.data.succes){
  setuser(userdetail);
  setsucces(res.data);
  Setpage('login')
 }else{
  setsucces(res.data);
 }
  
}

    // login Api call function
const Login=async()=>{
let res=await Loginuser(login)
if(res.data.succes){
  sessionStorage.setItem('accestoken',`Bearer ${res.data.accestoken}`)
  sessionStorage.setItem('refreshtoken',`Bearer ${res.data.refreshtoken}`)
  setauth(true)
  navigate('/')
}else{
seterror(res.data)
}
}

    return (
      <div className="login">
        <div className="box1">
        <div className="logform">
        {
          page ==='login' ?
          
          <dv className="logdiv">
          
          <div className="logo">
            <img src={logo} alt='logo' height='100' width='100'></img>
          </div>
        
        <br/>
        <TextField onChange={(e)=>oninputchange(e)} name='username'className="text" label="Username" type="text" />
        <br/>
        <TextField onChange={(e)=>oninputchange(e)} name='password' className="text" label="Password" type="password" />
        
        <br/>
        <Button onClick={()=>Login()} id="loginbtn" variant="contained">logIn</Button>
        <h4>New User ? </h4>
        
       
        <Button onClick={()=>Changepage()} variant="contained" id="signbtn">Create Account</Button>
        </dv>
      :
      <dv className="signdiv">
        
        <br/>
        <TextField onChange={(e)=>onvaluechange(e)} name='username' className="text" label="Username" type="text" />
        <br/>
        <TextField onChange={(e)=>onvaluechange(e)} name='email' className="text" label="Email" type="email" />
        <br/>
        <TextField onChange={(e)=>onvaluechange(e)} name='password' className="text"label="Password" type="password"  />
        <br/>
        <br/>

        <Button onClick={()=>Signup()} variant="contained" id="signbtn">signup</Button>
        <h4>Have an account ? Login here</h4>
        <Button onClick={()=>Changepage()}id="loginbtn" variant="contained">logIn</Button>
        
        
        </dv>

        }
        <div className="diverror">
        <br/><br/>
        {error && <div class='error'><Typography >{error.msg}</Typography></div>} 
        {succes && <div class='error'><Typography >{succes.msg}</Typography></div>}
        {succes && <div id='succes'><Typography >{succes.msg1}</Typography></div>}
        
       
        </div>
        </div>

        </div>
        <div className="box2">
        <img src={bg} alt='logo' height='100%' width='100%'></img>
        </div>

        </div>
    );
  }
  
  export default Login;