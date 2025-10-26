"use client";

import React, { useState } from "react";

interface UserData {
  email: string;
  names: string;
  last_names: string;
  phone: string;
  birth_date: string;
}

export default function ActualizarDatosPage() {
  const [formData, setFormData] = useState<UserData>({
    email: "",
    names: "",
    last_names: "",
    phone: "",
    birth_date: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/users/actualizar_datos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result)
      if (response.status === 200) {
        setMessage(result.message);
      } else if (response.status === 400) {
        setMessage("⚠️ Faltan datos o no se enviaron cambios.");
      } else if (response.status === 404) {
        setMessage("❌ No existe un usuario con ese correo.");
      } else if (response.status === 500) {
        setMessage("💥 Error interno del servidor.");
      } else {
        setMessage("Ocurrió un error inesperado.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error de conexión con el servidor.");
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
        <h1>Actualizar Datos del Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
          <label htmlFor="email" >Ingresar el correo del usuario que se desea actualizar</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder=" "
            required
          />
          {message && (
          <div className="mt-4 p-3 border rounded bg-gray-100 text-center">
            {message}
          </div>
        )}
          </div>
          <div className="form_group">
          <input
            name="names"
            placeholder=" "
            value={formData.names}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="names" className="label">Nombre</label>
          </div>
          <div className="form_group">
          <input
            name="last_names"
            placeholder=" "
            value={formData.last_names}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="last_names" className="label">Apellidos</label>
          </div>
          <div className="form_group">
          <input
            name="phone"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="phone" className="label">Numero</label>
        
        </div>
        <div className="form_group">
          <input
            name="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="birth_date" className="label">Fecha De Nacimiento</label>
          </div>
          <button
            type="submit"
            className="boton"
            disabled={loading}
          >
            {loading ? "Actualizando..." : "Actualizar"}
          </button>
        </form>

        
        </section>
      </div>
      </div>
  );
}
