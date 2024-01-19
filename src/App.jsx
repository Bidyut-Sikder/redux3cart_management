import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductInput from './components/ProductInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart />} />

            </Routes>

         </BrowserRouter>


      </Provider>
   );
};

export default App;



