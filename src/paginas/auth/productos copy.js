import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importa tus imágenes directamente
import logo from '../../imagenes/logo.jpg';
import producto1 from '../../imagenes/producto1.jpg';
import producto2 from '../../imagenes/producto2.jpg';
import producto3 from '../../imagenes/producto3.jpg';
import producto4 from '../../imagenes/producto4.jpg';
import producto5 from '../../imagenes/producto5.jpg';
import producto6 from '../../imagenes/producto6.jpg';
import Index2 from './index2';

const Productos = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (Producto) => {
    setCarrito([...carrito, { ...Producto, cantidad: 1 }]);
  };

  const eliminarDelCarrito = (Index2) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(Index2, 1);
    setCarrito(nuevoCarrito);
  };

  const handlePagoContraEntrega = () => {
    // Lógica para procesar el pago contra entrega
    alert('Seleccionaste Pago Contra Entrega');
  };

  const handlePagoConTarjeta = () => {
    // Lógica para procesar el pago con tarjeta
    alert('Seleccionaste Pago con Tarjeta');
  };
  return (
<div>
      <h2>Panel de Tienda</h2>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tienda para Mascotas</title>
      <style dangerouslySetInnerHTML={{__html: "\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Cambiado a una fuente más elegante */\n            background-color: #f4f4f4; /* Fondo gris claro */\n        }\n\n        header {\n            background-color: #f8d7da; /* Rojo suave para el encabezado */\n            padding: 20px;\n            text-align: center;\n            display: flex;\n            align-items: center; /* Alinea verticalmente */\n            justify-content: center; /* Alinea horizontalmente */\n        }\n\n        h1 {\n            margin-right: 10px; /* Espaciado entre la imagen y el texto */\n            color: #333;\n        }\n\n        img {\n            width: 50px; /* Ancho de la imagen */\n            height: 50px; /* Altura de la imagen */\n            border-radius: 50%; /* Borde redondeado para hacer la imagen circular */\n            object-fit: cover; /* Ajusta la imagen para cubrir el área del contenedor */\n        }\n\n        nav {\n            display: flex;\n            justify-content: center;\n            background-color: #f8d7da; /* Rojo suave para el fondo del menú */\n            padding: 10px;\n        }\n\n        nav a {\n            margin: 0 15px;\n            text-decoration: none;\n            color: #333;\n            font-weight: bold;\n            transition: color 0.3s ease; /* Agregado efecto de transición al color */\n        }\n\n        nav a:hover {\n            color: #fff; /* Cambia el color al pasar el cursor */\n        }\n\n        main {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff; /* Fondo blanco */\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sutil sombra */\n        }\n\n        section {\n            margin-bottom: 20px;\n        }\n\n        img.product-image {\n            max-width: 100%;\n            height: auto;\n            border-radius: 8px;\n        }\n\n        footer {\n            text-align: center;\n            padding: 10px;\n            background-color: #f8d7da; /* Rojo suave para el pie de página */\n            font-size: 14px; /* Tamaño de letra más pequeño */\n            color: #555; /* Color de letra más oscuro */\n        }\n\n        /* Estilos para el slider (puedes reemplazar esto con tu implementación real) */\n        .slider {\n            width: 100%;\n            max-width: 800px;\n            margin: 20px auto;\n            overflow: hidden;\n        }\n\n        .slider img {\n            width: 100%;\n            height: auto;\n        }\n    " }} />
         <style dangerouslySetInnerHTML={{__html: "\n            body {\n                margin: 0;\n                padding: 0;\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                background-color: #f4f4f4;\n            }\n    \n            header {\n                background-color: #f8d7da;\n                padding: 20px;\n                text-align: center;\n            }\n    \n            nav {\n                display: flex;\n                justify-content: center;\n                background-color: #f8d7da;\n                padding: 10px;\n            }\n    \n            nav a {\n                margin: 0 15px;\n                text-decoration: none;\n                color: #333;\n                font-weight: bold;\n                transition: color 0.3s ease;\n            }\n    \n            nav a:hover {\n                color: #fff;\n            }\n    \n            main {\n                max-width: 800px;\n                margin: 20px auto;\n                padding: 20px;\n                background-color: #fff;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            }\n    \n            section {\n                margin-bottom: 20px;\n                display: flex;\n                align-items: center; /* Alinea verticalmente */\n            }\n    \n            .product-info {\n                flex: 1;\n                margin-left: 20px;\n            }\n    \n            img.product-image {\n                max-width: 80%; /* Reducir el ancho de la imagen */\n                height: auto;\n                border-radius: 12px; /* Puedes ajustar la redondez aquí */\n            }\n    \n            footer {\n                text-align: center;\n                padding: 10px;\n                background-color: #f8d7da;\n                font-size: 14px;\n                color: #555;\n            }\n    \n            .slider {\n                width: 100%;\n                max-width: 800px;\n                margin: 20px auto;\n                overflow: hidden;\n            }\n    \n            .slider img {\n                width: 100%;\n                height: auto;\n            }\n    \n            .slider {\n                width: 100%;\n                max-width: 800px;\n                margin: 20px auto;\n                overflow: hidden;\n            }\n    \n            .slider img {\n                width: 100%;\n                height: auto;\n            }\n    \n            .product-cards {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-around;\n            }\n    \n            .product-card {\n                width: 200px;\n                margin: 20px 10px;\n                padding: 10px;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                text-align: center;\n            }\n    \n            .product-card img {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n                margin-bottom: 10px;\n            }\n            img.product-image {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n            }\n    \n            img.product-card-image {\n                max-width: 100%;\n                height: auto;\n                border-radius: 8px;\n                margin-bottom: 10px;\n            }\n    \n            .product-card {\n                width: 200px;\n                margin: 20px 10px;\n                padding: 10px;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                text-align: center;\n            }\n    \n        " }} />

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
        <a href="">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/conocenos">Conócenos</a>
        <a href="/registrarproducto">Registrar Producto</a>


      </nav>
  <main>
    {/* Contenido actual... */}
    {/* Cards de productos */}
    <div className="product-cards">
      {/* Card 1 */}
      <div className="product-card">
      <img src={producto1} alt="Producto1" />
        <h3>Producto 1</h3>
        <p>Comida para perro adulto</p>
        <p>Precio: $30.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
        <button onClick={handlePagoContraEntrega}>Pago Contra Entrega</button>
  <button onClick={handlePagoConTarjeta}>Pago con Tarjeta</button>
</div>
      
      {/* Card 2 */}
      <div className="product-card">
      <img src={producto2} alt="Producto2" />
        <h3>Producto 2</h3>
        <p>Collar de fresitas</p>
        <p>Precio: $35.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
        <button onClick={handlePagoContraEntrega}>Pago Contra Entrega</button>
        <button onClick={handlePagoConTarjeta}>Pago con Tarjeta</button>

      </div>
      <div className="product-card">
        <img src={producto3} alt="Producto3" />
        <h3>Producto 3</h3>
        <p>Balones de plastico masticable.</p>
        <p>Precio: $20.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
        <button onClick={handlePagoContraEntrega}>Pago Contra Entrega</button>
  <button onClick={handlePagoConTarjeta}>Pago con Tarjeta</button>

      </div>
      <div className="product-card">
      <img src={producto4} alt="Producto4" />
        <h3>Producto 4</h3>
        <p>Cama super acolchonada para perros o gatos.</p>
        <p>Precio: $80.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
      </div>
      <div className="product-card">
      <img src={producto5} alt="Producto5" />
        <h3>Producto 5</h3>
        <p>Collar pequeño de corazones</p>
        <p>Precio: $20.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
      </div>
      <div className="product-card">
      <img src={producto6} alt="Producto6" />
        <h3>Producto 6</h3>
        <p>Collar de paseo con cuerda elastica y medidor de la cuerda</p>
        <p>Precio: $30.000</p>
        <button onClick={() => agregarAlCarrito(Productos)}>Agregar al carrito</button>
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar del carrito</button>
      
      </div>
      <section>
  <h2>Carrito de Compras</h2>
  <ul>
    {carrito.map((item, index) => (
      <li key={index}>
        {item.nombre} - Cantidad: {item.cantidad}
        <button onClick={() => eliminarDelCarrito(Index2)}>Eliminar</button>
      </li>
    ))}
  </ul>
</section>
    </div>
  </main>
  <footer>
    <p>© 2023 Tienda para Mascotas. Todos los derechos reservados.</p>
  </footer>
</div>



    );
};


export default Productos;