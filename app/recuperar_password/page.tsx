'use client';
import React, { useState } from 'react';

export default function RecuperarPassword() {
  const [email, setEmail] = useState('');
  const [nuevaPassword, setNuevaPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/recuperar_password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password_hash: nuevaPassword }),
      });

      if (response.ok) {
        setMessage('Contraseña actualizada exitosamente.');
      } else if (response.status === 404) {
        setMessage('No existe un usuario con ese correo.');
      } else {
        const result = await response.json();
        setMessage(result.error || 'Ocurrió un error.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
       <div>
            <div className="menu">
        <section className="Logo">
            <a href="/"><img className="totoroMenu" src="../totoroMenu.png" alt=""></img></a>
        </section>
        <section className="navMenu">
            <ul>
                <li className="linkMenu"><a  href="/">Home</a></li>
            </ul>
            <ul>
                <li className="linkMenu"><a  href="./registrer">Registro</a></li>
            </ul>
             <ul>
                <li className="linkMenu"><a  href="./login">Login</a></li>
            </ul>
             <ul>
                <button id="cambio_tema" className="toggle">
                    <span className="circle"></span>
                </button>
            </ul>
        </section>
    </div>
    <div className="fondo">
      <section className='formulario'>
        <h2>Recuperar Contraseña</h2>
        <select className="gif">
                    <option></option>
                </select>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              type="email"
              placeholder=" "
              required
              value={email}
              name='email'
              className='input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='email' className='label'>Correo electrónico</label>
          </div>
          <div className="form_group">
            <input
              type="password"
              placeholder=" "
              required
              value={nuevaPassword}
              name='password'
              className='input'
              onChange={(e) => setNuevaPassword(e.target.value)}
            />
            <label htmlFor='password' className='label'>Nueva contraseña</label>
          </div>
            <button type="submit" disabled={loading} className='boton'>
            {loading ? 'Actualizando...' : 'Actualizar Contraseña'}
          </button>
        </form>
        {message && <div className="response-message">{message}</div>}
       </section>
      </div>
      </div>
  );
}
