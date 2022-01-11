
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signup from './containers/signup'
import Signin from './containers/signin'
import Dashboard from './containers/dashboard'
import { AuthProvider } from './ContextAPI/AuthContext'

// import './App.css';

function App() {


  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
