import React, { useState } from 'react';

function Saludo() {
  const [nombre, setNombre] = useState('');

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h2>¡Hola, {nombre || 'invitado'}!</h2>
      <input
        type="text"
        value={nombre}
        onChange={handleChangeNombre}
        placeholder="Ingresa tu nombre"
      />
    </div>
  );
}

export default Saludo;
