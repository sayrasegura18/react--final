
import logo from '../../imagenes/logo.jpg';
import slider1 from '../../imagenes/slider1.jpg';
import slider2 from '../../imagenes/slider2.jpg';
import slider3 from '../../imagenes/slider3.jpg';
import Tienda from './tienda';
import React, { useState } from 'react';

const Index2 = () => {
  const [userRole, setUserRole] = useState('tienda'); 
  return (
    
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tienda para Mascotas</title>
      <style dangerouslySetInnerHTML={{__html: "\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Cambiado a una fuente más elegante */\n            background-color: #f4f4f4; /* Fondo gris claro */\n        }\n\n        header {\n            background-color: #f8d7da; /* Rojo suave para el encabezado */\n            padding: 20px;\n            text-align: center;\n            display: flex;\n            align-items: center; /* Alinea verticalmente */\n            justify-content: center; /* Alinea horizontalmente */\n        }\n\n        h1 {\n            margin-right: 10px; /* Espaciado entre la imagen y el texto */\n            color: #333;\n        }\n\n        img {\n            width: 50px; /* Ancho de la imagen */\n            height: 50px; /* Altura de la imagen */\n            border-radius: 50%; /* Borde redondeado para hacer la imagen circular */\n            object-fit: cover; /* Ajusta la imagen para cubrir el área del contenedor */\n        }\n\n        nav {\n            display: flex;\n            justify-content: center;\n            background-color: #f8d7da; /* Rojo suave para el fondo del menú */\n            padding: 10px;\n        }\n\n        nav a {\n            margin: 0 15px;\n            text-decoration: none;\n            color: #333;\n            font-weight: bold;\n            transition: color 0.3s ease; /* Agregado efecto de transición al color */\n        }\n\n        nav a:hover {\n            color: #fff; /* Cambia el color al pasar el cursor */\n        }\n\n        main {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff; /* Fondo blanco */\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sutil sombra */\n        }\n\n        section {\n            margin-bottom: 20px;\n        }\n\n        img.product-image {\n            max-width: 100%;\n            height: auto;\n            border-radius: 8px;\n        }\n\n        footer {\n            text-align: center;\n            padding: 10px;\n            background-color: #f8d7da; /* Rojo suave para el pie de página */\n            font-size: 14px; /* Tamaño de letra más pequeño */\n            color: #555; /* Color de letra más oscuro */\n        }\n\n        /* Estilos para el slider (puedes reemplazar esto con tu implementación real) */\n        .slider {\n            width: 100%;\n            max-width: 800px;\n            margin: 20px auto;\n            overflow: hidden;\n        }\n\n        .slider img {\n            width: 100%;\n            height: auto;\n        }\n    " }} />


      <header>
        <img src={logo} alt="Logo" />
        <h1>Tienda para Mascotas</h1>
      </header>

      <nav>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/conocenos">Conócenos</a>
        <a href="/login">Iniciar Sesión</a>
        <a href="/register">Registrarme</a>
      </nav>

      <div className="slider">
  {/* Slider con las imágenes importadas */}
  <img src={slider1} alt="Slider 1" style={{ maxWidth: '90%', height: 'auto' }} />
  <img src={slider2} alt="Slider 2" style={{ maxWidth: '90%', height: 'auto' }} />
  <img src={slider3} alt="Slider 3" style={{ maxWidth: '90%', height: 'auto' }} />
</div>
<br />
 {userRole === 'tienda' ? (
        // Si el usuario tiene el rol de tienda, muestra el panel de tienda
        <Tienda />
      ) : (
  <footer>
    <p>© 2023 Tienda para Mascotas. Todos los derechos reservados.</p>
  </footer>
)}
</div>
  );
};

export default Index2;
