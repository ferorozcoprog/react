import React from 'react';
import { Header } from "./componentes/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './componentes/Footer/Footer';
import { Error404 } from './componentes/Error404/Error404';
import { Contacto } from './componentes/Contacto/Contacto';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartView } from './componentes/CartView/CartView';
import { Checkout } from './componentes/Checkout/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path="/" element={ <ItemListContainer />}/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer />}/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer />}/>
            <Route path="/cart" element={ <CartView />}/>
            <Route path="/checkout" element={ <Checkout />}/>
            <Route path="/contacto" element={ <Contacto />}/>
            <Route path="*" element={ <Error404 /> }/>
          </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}
export default App