import { Toolbar,AppBar  } from '@mui/material';
import bg from '../images/bg.jpg'
import { Typography } from '@mui/material';
import './appbar.css'
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
    
        <AppBar id='appbar'>
            <Toolbar>
               <Link to='/'><li>Home</li></Link> 
               <Link> <li>About</li></Link> 
               <Link><li>Contact</li></Link> 
               <Link to='/login'><li >logout</li></Link> 
               
     
      <img src={bg}  alt='logo' class='avtar' height='97%' width='97%'></img>
            </Toolbar>
        </AppBar>
    
       
    )
}

export default Navbar;