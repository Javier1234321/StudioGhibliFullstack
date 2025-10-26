'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  nombres: string;
  password_hash: string;
}

export const Page = () => {
  const router = useRouter();

  const irARecuperarPassword = () => {
    router.push('/recuperar_password');
  };
  const actualizarDatos = () => {
    router.push('/actualizar_datos');
  };
  const eliminarCuenta = () => {
    router.push('/eliminar_cuenta');
  };

  const [formData, setFormData] = useState<FormData>({
    nombres: '',
    password_hash: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // 👇 Aquí se traduce correctamente el campo a "names" para tu backend
      const dataToSend = {
        names: formData.nombres,
        password_hash: formData.password_hash,
      };

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log('Servidor:', result);

      // 👇 Verifica el valor devuelto por el backend, no solo response.ok
      if (result.ok) {
        setMessage('✅ Login exitoso');
      } else {
        setMessage(`❌ ${result.error || 'Error al iniciar sesión'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error de conexión con el servidor');
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
            <li className="linkMenu"><a href="/">Home</a></li>
          </ul>
          <ul>
            <li className="linkMenu"><a href="./registrer">Registro</a></li>
          </ul>
          <ul>
            <button id="cambio_tema" className="toggle">
              <span className="circle"></span>
            </button>
          </ul>
        </section>
      </div>

      <div className="fondo">
        <section className="formulario">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <select className="gif">
              <option></option>
            </select>
            {message && <div>{message}</div>}
            <div className="form_group">
              <input
                id='nombres'
                type="text"
                placeholder=" "
                name="nombres"
                className="input"
                value={formData.nombres}
                onChange={handleChange}
              />
              <label htmlFor="nombres" className="label">Nombre</label>
            </div>
            <div className="form_group">
              <input
                id='nombres'
                type="password"
                placeholder=" "
                name="password_hash"
                className="input"
                required
                value={formData.password_hash}
                onChange={handleChange}
              />
              <label htmlFor="password_hash" className="label">Contraseña</label>
            </div>
            <button type="submit" className="boton" disabled={loading}>
              {loading ? 'Verificando...' : 'Enviar'}
            </button>
          </form>

          <button className="boton" onClick={irARecuperarPassword}>Recuperar password</button>
          <button className="boton" onClick={actualizarDatos}>Actualizar datos</button>
          <button className="boton" onClick={eliminarCuenta}>Eliminar Cuenta</button>
        </section>
      </div>
    </div>
  );
};

export default Page;
