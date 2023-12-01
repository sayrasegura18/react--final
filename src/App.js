import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index2 from './paginas/auth/index2';
import Productos from './paginas/auth/productos';
import Conocenos from './paginas/auth/conocenos';
import Login from './paginas/auth/login';
import Registrar from './paginas/auth/register';
import RegistrarProducto from './paginas/auth/registrarproducto';
import Tienda from './paginas/auth/tienda';
import ProductosCopy from './paginas/auth/productos copy';
import { AuthProvider } from './paginas/auth/AuthContext'; // Importa el AuthProvider aquí

function App() {
  return (
    <Fragment>
      <Router>
        {/* Wrap your Routes and components with AuthProvider */}
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Index2 />} />
            <Route path="/productos" exact element={<Productos />} />
            <Route path="/productos copy" exact element={<ProductosCopy/>} />
            <Route path="/conocenos" exact element={<Conocenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registrar />} />
            <Route path="/registrarproducto" element={<RegistrarProducto />} />
            <Route path="/tienda" exact element={<Tienda />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Fragment>
  );
}

export default App;
