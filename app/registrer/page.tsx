'use client';

import React, { useState } from 'react';

interface FormData {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  password: string;
  fechaNacimiento: string;
}
export const Page=() => {
    const [formData, setFormData] = useState<FormData>({
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        password: '',
        fechaNacimiento: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        
    try {
        const dataToSend = {
            names: formData.nombres,
            last_names: formData.apellidos,
            email: formData.correo,
            phone: formData.telefono,
            password_hash: formData.password, 
            birth_date: formData.fechaNacimiento
      };

      console.log('Enviando datos:');
        const response = await fetch('api/auth/registrer', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });
      const result=await response.json();
      console.log('Servidor: ',result)
    if (response.ok) {
        setMessage('🎉 Registro exitoso');
    } else if (response.status === 400) {
        setMessage('⚠️ Faltan datos en el formulario');
    } else if (response.status === 409) {
        setMessage('❌ Este correo ya está registrado');
    } else if (response.status === 500) {
        setMessage('💥 Error del servidor, intenta más tarde');
    
    }else if(response.status===408){
        setMessage('Este numero de telefono ya esta registrado');
    } 
    else {
        setMessage('Ocurrió un error inesperado');
    }


    } catch (error) {
      console.error('Error:', error);
      setMessage('Error de conexión');
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
            <section className="formulario">
                <h2>Registro</h2>
                {message && (
                    <div>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                <div className="form_group">
                    <input type="text" className="input" placeholder=" " required name='nombres' value={formData.nombres} onChange={handleChange}/>
                    <label htmlFor="nombres" className="label">Nombres</label>
                </div>
                <div className="form_group">
                    <input type="text" className="input" placeholder=" " required name='apellidos'value={formData.apellidos} onChange={handleChange} />
                    <label htmlFor="apellidos" className="label">Apellidos</label>
                </div>
                <div className="form_group">
                    <input type="email" className="input" placeholder=" " required name='correo' value={formData.correo} onChange={handleChange} />
                    <label htmlFor="correo" className="label">Correo</label>
                </div>
                <div className="form_group">
                    <input type="number" className="input" placeholder=" "  name='telefono' value={formData.telefono} onChange={handleChange}/>
                    <label htmlFor="telefono" className="label">Teléfono</label>
                </div>
                <div className="form_group">
                    <input type="password" className="input" placeholder=" " required name='password' value={formData.password} onChange={handleChange}/>
                    <label htmlFor="passwpord" className="label">Password</label>
                </div>
                <div className="form_group">
                    <input type="date" className="input" placeholder=" " required name='fechaNacimiento' value={formData.fechaNacimiento} onChange={handleChange}/>
                    <label htmlFor="fechaNacimiento" className="label">Fecha de nacimiento</label>
                </div>
                 
                <button type='submit' className="boton" disabled={loading}>{loading ? 'Registrando...':'Enviar'}</button>
                </form>    
            </section>
        </div>
        </div>
    );
};

export default Page;