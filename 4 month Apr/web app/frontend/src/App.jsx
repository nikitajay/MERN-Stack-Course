// import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Login from './screens/login';
import Register from './screens/Register';
import Item from './screens/Item';
import Dashboard from './screens/Dashboard';


import { ToastContainer, toast } from 'react-toastify';

import AuthNavBar from './components/AuthNavBar';
const App = () => {
  console.log(import.meta.env.VITE_API_URL,"===>");
  return (
   <BrowserRouter>
    <div >  
      {/* ToastContainer renders the toast notification popup on the screen */}
                <ToastContainer
                    // Setting the default position of all toasts to top-right
                    position="top-right"
                    // Auto closing toast after 5000 milliseconds
                    autoClose={5000}
                    // Showing the progress bar inside the toast
                    hideProgressBar={false}
                    // Newer toasts will not appear on top of older ones
                    newestOnTop={false}
                    // Disabling close on click for the toast
                    closeOnClick={false}
                    // Disabling right-to-left layout for the toast
                    rtl={false}
                    // Toast will pause when the browser window loses focus
                    pauseOnFocusLoss
                    // Allowing the toast to be draggable by the user
                    draggable
                    // Toast will pause when user hovers over it
                    pauseOnHover
                    // Setting the toast theme to light
                    theme="light"
                />
    
         <AuthNavBar/>
      <Routes>
        <Route path='/' element={<Login/>} />  
        
        <Route path='/register' element={<Register/>} />
        <Route path='/Item' element={<Item/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App
