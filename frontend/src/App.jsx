import React from 'react';
import './assets/css/reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderLayout from './components/layout/OrderLayout';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

const ROUTES = {
  HOME: '/',
  ORDER: '/order',
  COMPLETE: '/complete',
  ERROR: '/error',
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ORDER} element={<OrderLayout />}>
          <Route index element={<Order />} />
        </Route>
        <Route path={ROUTES.COMPLETE} element={<Complete />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;