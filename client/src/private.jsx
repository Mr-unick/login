import { useEffect } from "react";


import {Outlet, useNavigate} from 'react-router-dom'


const Privateroute= ({setauth,...props})=>{
    useEffect(()=>{
        setauth(true)
    })
    const navigate = useNavigate();
    return ( setauth ?
    <>
    <Outlet/>
    </>
    :navigate('/login'))
  };

  export default Privateroute;