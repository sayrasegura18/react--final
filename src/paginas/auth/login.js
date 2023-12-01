import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../imagenes/logo.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.data.success) {
        
        console.log('lInicio de sesion correctamente');
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      console.error('', error.message);
      setError('Usuario o contraseña invalidos');
    }
  };

  return (
    <div>
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tienda para Mascotas</title>
  <style dangerouslySetInnerHTML={{__html: "\n            body {\n                margin: 0;\n                padding: 0;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                background-color: #f4f4f4;\n            }\n    \n            header {\n                background-color: #f8d7da;\n                padding: 20px;\n                text-align: center;\n            }\n    \n            nav {\n                display: flex;\n                justify-content: center;\n                background-color: #f8d7da;\n                padding: 10px;\n            }\n    \n            nav a {\n                margin: 0 15px;\n                text-decoration: none;\n                color: #333;\n                font-weight: bold;\n                transition: color 0.3s ease;\n            }\n    \n            nav a:hover {\n                color: #fff;\n            }\n    \n            main {\n                max-width: 800px;\n                margin: 20px auto;\n                padding: 20px;\n                background-color: #fff;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            }\n    \n            section {\n                margin-bottom: 20px;\n                display: flex;\n                align-items: center; /* Alinea verticalmente */\n            }\n    \n            .product-info {\n                flex: 1;\n                margin-left: 20px;\n            }\n    \n            img.product-image {\n                max-width: 80%; /* Reducir el ancho de la imagen */\n                height: auto;\n                border-radius: 12px; /* Puedes ajustar la redondez aquí */\n            }\n    \n            footer {\n                text-align: center;\n                padding: 10px;\n                background-color: #f8d7da;\n                font-size: 14px;\n                color: #555;\n            }\n    \n            .slider {\n                width: 100%;\n                max-width: 800px;\n                margin: 20px auto;\n                overflow: hidden;\n            }\n    \n            .slider img {\n                width: 100%;\n                height: auto;\n            }\n    \n            .slider {\n                width: 100%;\n                max-width: 800px;\n                margin: 20px auto;\n                overflow: hidden;\n            }\n    \n            .slider img {\n                width: 100%;\n                height: auto;\n            }\n    \n            .product-cards {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-around;\n            }\n    \n            .product-card {\n                width: 200px;\n                margin: 20px 10px;\n                padding: 10px;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                text-align: center;\n            }\n    \n            .product-card img {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n                margin-bottom: 10px;\n            }\n            img.product-image {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n            }\n    \n            img.product-card-image {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n                margin-bottom: 10px;\n            }\n    \n            .product-card {\n                width: 200px;\n                margin: 20px 10px;\n                padding: 10px;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                text-align: center;\n            }\n    \n        " }} />
</div>
<header>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Agregado para centrar horizontalmente
    }}
  >
    <img
      src={logo}
      alt="Logo"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
    <h1 style={{ marginLeft: '10px' }}>Tienda para Mascotas</h1>
  </div>
</header>
      <nav>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/conocenos">Conócenos</a>
        <a href="/login">Iniciar Sesión</a>
        <a href="/register">Registrarme</a>
      </nav>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 190px)', // Ajusta la altura para centrar el contenido
        }}
      >
        <div
          style={{
            width: '300px', // Ancho del formulario
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
        >
          <h2>Iniciar Sesión</h2>
          <form>
            <label>
            Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </label>
            <br />
            <label>
            Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </label>
            <br />
            <button
              type="button"
              onClick={handleLogin}
              style={{
                backgroundColor: '#4caf50',
                color: '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
      <footer>
    <p>© 2023 Tienda para Mascotas. Todos los derechos reservados.</p>
  </footer>
</div>
  );
};



export default Login;
