

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar'; 
import HomePage from './Components/HomePage';
import ShopNow from './Components/ShopNow'; 
import HealthExpert from './Components/HealthExpert';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        
        <Routes> 
          <Route path="/" element={<HomePage/>} /> 
          <Route path="/shopnow" element={<ShopNow/>} /> 
          <Route path="/healthexpert" element={<HealthExpert/>} /> 
          <Route path="/aboutus" element={<AboutUs/>} /> 
          <Route path="/signin" element={<SignIn/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          
        
          <Route component={DefaultComponent} />
        </Routes>
      </div>
    </Router>
  );
}

// Default component to render when no routes match
function DefaultComponent() {
  return <div>Page Not Found</div>;
}

export default App;
