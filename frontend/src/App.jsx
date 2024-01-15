import React from 'react';
import './assets/css/reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderLayout from './components/layout/OrderLayout';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<OrderLayout />}>
            <Route index element={<Order />}/>
          </Route>
          <Route path='/complete' element={<Complete/>}/>
          <Route path='/error' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;