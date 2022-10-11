import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/App.css'
import Navbar from './contenido/Navbar';
import Home from './contenido/Home'
import About from './contenido/About';
import Carrito from './contenido/Carrito';
import Contacto from './contenido/Contacto';
import Producto from './contenido/Producto';

const App = () => {
  return (
    <> 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producto/:id" element={<Producto/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;