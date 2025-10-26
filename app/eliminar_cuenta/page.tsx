"use client";

import React, { useState } from "react";

export default function EliminarCuentaPage() {
  const [formData, setFormData] = useState({
    email: "",
    password_hash: "",
  });
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");
    setLoading(true);

    try {
      const response = await fetch("/api/eliminar_cuenta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 200) {
        setMensaje("✅ Tu cuenta ha sido eliminada correctamente.");
      } else if (response.status === 400) {
        setMensaje("⚠️ Faltan datos: correo o contraseña.");
      } else if (response.status === 401) {
        setMensaje("❌ Correo o contraseña incorrectos.");
      } else if (response.status === 409) {
        setMensaje("⚠️ Tu cuenta ya estaba eliminada.");
      } else if (response.status === 500) {
        setMensaje("💥 Error del servidor. Intenta más tarde.");
      } else {
        setMensaje("Error inesperado. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("❌ Error de conexión con el servidor.");
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
                <button id="cambio_tema" className="toggle">
                    <span className="circle"></span>
                </button>
            </ul>
        </section>
    </div>
      <div className="fondo">
        <section className="formulario">
        <h1>
          Eliminar Cuenta
        </h1>

        <p className="mb-4 text-sm text-gray-600 text-center">
          Ingresa tu correo y contraseña para eliminar tu cuenta.  
          Esta acción es irreversible
        </p>
        {mensaje && (
          <div
            className={`mt-4 p-3 border rounded text-center ${
              mensaje.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {mensaje}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          <label htmlFor="email" className="label">Email</label>
          </div>
          <div className="form_group">
            <input
              type="password"
              name="password_hash"
              placeholder=" "
              value={formData.password_hash}
              onChange={handleChange}
              className="input"
              required
            />
            <label htmlFor="password" className="label">password</label>
            </div>
          <button
            type="submit"
            disabled={loading}
            className="boton"
          >
            {loading ? "Eliminando..." : "Eliminar Cuenta"}
          </button>
        </form>
        </section>
      </div>
      </div>
  );
}
