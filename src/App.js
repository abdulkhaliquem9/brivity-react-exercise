
import React  from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signup from './containers/signup'
import Signin from './containers/signin'
import Dashboard from './containers/dashboard'

// import './App.css';

function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />  
      <Route path="/signin" element={<Signin />} />  
      <Route path="/dashboard" element={<Dashboard />} />  
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
