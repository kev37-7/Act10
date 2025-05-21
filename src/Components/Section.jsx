import React, { useState } from "react";
import './Section.css';

const Section = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Kev", correo: "Kev@example.com" },
    { id: 2, nombre: "Dan", correo: "Dan@example.com" },
    { id: 3, nombre: "David", correo: "David@example.com" },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoCorreo, setNuevoCorreo] = useState("");

  const handleAgregarUsuario = (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevoCorreo) return;

    const nuevoUsuario = {
      id: Date.now(),
      nombre: nuevoNombre,
      correo: nuevoCorreo,
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoNombre("");
    setNuevoCorreo("");
  };

  const handleEliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <section className="user-section">
      <form className="user-form" onSubmit={handleAgregarUsuario}>
        <input
          type="text"
          placeholder="Nombre del usuario"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={nuevoCorreo}
          onChange={(e) => setNuevoCorreo(e.target.value)}
        />
        <button type="submit">Agregar Usuario</button>
      </form>

      <ul className="user-list">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="user-item">
            <div>
              <strong>{usuario.nombre}</strong>
              <p>{usuario.correo}</p>
            </div>
            <div className="user-actions">
              {/* Botón editar si lo quieres después */}
              <button onClick={() => handleEliminarUsuario(usuario.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
