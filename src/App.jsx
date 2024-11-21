import React from 'react'
import Users from './Crud/User/Users'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Users />
    </BrowserRouter>
      
    </>
  )
}

export default App