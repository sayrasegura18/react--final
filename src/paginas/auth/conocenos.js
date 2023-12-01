import React from 'react';
import logo from '../../imagenes/logo.jpg';
import perrochancla from '../../imagenes/perrochancla.jpg';


const conocenos= () => {
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
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      {/* Contenido específico de la vista "Conócenos" */}
      <main>
      <section>
    <div>
        <h2>¡Bienvenido a nuestro mundo Animal!</h2>
        <p>
        En "Conócenos", te damos la bienvenida a un espacio dedicado al amor y cuidado de los animales.
        Somos más que una tienda para mascotas; somos apasionados por crear un entorno donde cada mascota
        se sienta especial y amada. Nuestra misión va más allá de ofrecer productos de calidad; queremos
        fomentar el vínculo entre las mascotas y sus dueños, promoviendo un estilo de vida saludable y feliz.
        Al elegir nuestros productos, estás contribuyendo a esta misión y difundiendo el amor por los animales.
        </p>
    </div>
    <br>
    </br>
    <div>
        <img
            src={perrochancla}
            alt="Perro Chancla"
            style={{
                maxWidth: '110%',
                height: 'auto',
                borderRadius: '8px',
                marginTop: '80px',
                
            }}
        />
    </div>
</section>

        {/* Puedes agregar más secciones con información adicional */}
      </main>
      <br></br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <footer>
    <p>© 2023 Tienda para Mascotas. Todos los derechos reservados.</p>
  </footer>
</div>



        );
};

export default conocenos;