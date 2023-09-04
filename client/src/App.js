
import './App.css';
import {BrowserRouter,Navigate,Outlet,Route,Routes} from 'react-router-dom'
// components
import Login from './components/login/login';
import Home from './components/pages/home';
import { useState } from 'react';
import Create from './components/pages/createpost';

const Privateroute= ({auth})=>{
  return auth ?
  <>
  <Outlet/>
  </>
  :<Navigate  to='/login' />
};

function App() {
  const [auth,setauth]=useState(false)
  console.log(auth)
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login setauth={setauth}/>}/>
      <Route path='/' element={<Privateroute auth={auth}/>}>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/createpost' element={<Create/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
