import * as React from 'react';
import './home.css';

const Modal1=(clas,setclas)=>{

  
  const handleClose = () => setclas('close');

  return (
    <div class={clas}>
      <h1>hello world</h1>
      <button onClick={handleClose}>close</button>
    </div>
  );}

  export default Modal1;