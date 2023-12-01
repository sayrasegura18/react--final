import React, { useState } from 'react';
const RegistroProducto = ({  }) => {
    const handleButtonClick = () => {
      // Aquí puedes mostrar un alert o realizar alguna acción al hacer clic en el botón
      alert('Producto registrado correctamente!');
    };
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('imagen', imagen);



    setNombre('');
    setDescripcion('');
    setPrecio('');
    setImagen(null);
  };

  return (
    <div className="registro-producto-container">
      <h2>Registro de Producto</h2>
    
     <style dangerouslySetInnerHTML={{__html: "\n      \n.registro-producto-container {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: #fff; /* Fondo blanco */\n}\n\n.registro-producto-form label {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.registro-producto-form input,\n.registro-producto-form textarea {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 15px;\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.registro-producto-form button {\n  background-color: #4caf50;\n  color: #fff;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n}\n" }} />

      <form onSubmit={handleSubmit} className="registro-producto-form">
        <label>
          Nombre del Producto:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        <br />
        <label>
          Imagen del Producto:
          <input type="file" accept="image/*" onChange={handleImagenChange} />
        </label>
        <br />
        <button onClick={handleButtonClick}>Registrar Producto</button>
      </form>
    </div>
  );
};

export default RegistroProducto;