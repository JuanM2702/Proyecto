import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/store';
import Inicio from './pages/home';
import DetallesProducto from './pages/details';
import Header from './Components/Header';
import Cart from './pages/cart';
import Factura from './pages/Facture';
import Footer from './Components/Footer';
import Game from './Components/CartContext';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
            <Route path="/details/:sku" element={<DetallesProducto />} />
            <Route path="/" element={<Inicio />} />
            <Route path='/cart' element= {<Cart/>} />
            <Route path='/factura' element= {<Factura/>} />
            <Route path='/ejemplos' element={<Game/>}/>
        </Routes>
        { /*<Footer/>*/ }
      </Router>
    </Provider>
  );
}

export default App;
