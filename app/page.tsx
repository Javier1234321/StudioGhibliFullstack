"use client"
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fondo = document.querySelector('.fondo') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;
    const btn = document.getElementById('cambio_tema');
    const linkMenus = document.querySelectorAll('.linkMenu > a');
    const carta = document.querySelectorAll('.carta');
    const logo = document.querySelector('.Logo') as HTMLElement;
    let bandera = true;

    if (!btn) return;

    const cambio = () => {
      if (!fondo || !menu || !logo) return;
      if (bandera) {
        fondo.style.backgroundImage = "url('/fondoGhibli.png'), linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)";
        fondo.style.backgroundSize = "cover";
        fondo.style.backgroundRepeat = "no-repeat";
        fondo.style.backgroundPosition = "center";
        menu.style.background="linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)";
        logo.style.background="linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)";
        linkMenus.forEach(link => {
          (link as HTMLElement).style.background = "black";
          (link as HTMLElement).style.color = "#e9e4e4ff";
        });
        carta.forEach(link => {
          (link as HTMLElement).style.background = "rgba(108, 122, 137)";
          (link as HTMLElement).style.color = "#e6e6f0";
          (link as HTMLElement).style.border="3px solid rgba(255, 230, 200, 0.1)";
        });
        bandera = false;
      } else {
        fondo.style.backgroundImage = '';
        fondo.style.backgroundSize = '';
        fondo.style.backgroundRepeat = '';
        fondo.style.backgroundPosition = '';
        logo.style.background='';
        menu.style.background = '';
        linkMenus.forEach(link => {
          (link as HTMLElement).style.background = '';
          (link as HTMLElement).style.color = '';
        });
        carta.forEach(link => {
          (link as HTMLElement).style.background = "";
          (link as HTMLElement).style.color = "";
          (link as HTMLElement).style.border="";
        });
        bandera = true;
      }
    };

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      cambio();
    });

    return () => {
      btn.removeEventListener('click', cambio);
    };
  }, []);
  return(
    <div>
        <div className="menu">
            <section className="Logo">
                <a href=""><img className="totoroMenu" src="/totoroMenu.png" alt=""></img></a>
            </section>
            <section className="navMenu">
                <ul>
                    <li className="linkMenu"><a  href="#Problema">Problema</a></li>
                </ul>
                <ul>
                    <li className="linkMenu"><a  href="#Objetivos">Objetivos</a></li>
                </ul>
                <ul>
                    <li className="linkMenu"><a  href="#Desafio">Desafio</a></li>
                </ul>
                <ul>
                    <li className="linkMenu"><a  href="#SP">Solucion Propuesta</a></li>
                </ul>
                <ul>
                    <li className="linkMenu"><a  href="/registrer">Registro</a></li>
                </ul>
                <ul>
                    <li className="linkMenu"><a  href="/login">Login</a></li>
                </ul>
                <ul>
                    <button id="cambio_tema" className="toggle">
                        <span className="circle"></span>
                    </button>
                </ul>
            </section>
        </div>
        <div className="fondo">
            <div className="Contenido">
                <section >
                    <img className="imagenKiki" src="https://i.pinimg.com/originals/6a/b0/b0/6ab0b037951a2443671623aab081b797.png"></img>
                </section>
                <section id="Problema" className="carta carta-1">
                    <h2>Problema</h2>
                    <p>Studio Ghibli, reconocido mundialmente por su estilo artístico único y sus películas aclamadas por la crítica, ha enfrentado desafíos relacionados con la venta de productos no autorizados que infringen sus derechos de autor y propiedad intelectual. </p>
                </section>
                <section id="Desafio" className="carta carta-2">
                    <h2>Desafio</h2>
                    <p>Crear una plataforma web oficial que permita a Studio Ghibli ofrecer sus productos licenciados de manera segura y controlada, asegurando la autenticidad de los productos y protegiendo su propiedad intelectual.</p>
                </section>
                <section  className="carta carta-3">
                    <h2 id="Objetivos">Objetivos</h2>
                    <ul>
                        <li><b>Promover productos oficiales:</b> Destacar y facilitar la adquisición de productos licenciados de Studio Ghibli.</li>
                        <li><b>Aumentar la visibilidad en línea:</b> Crear contenido atractivo que atraiga a nuevos fans y mantenga el interés de los existentes.</li>
                        <li><b>Ofrecer una experiencia inmersiva:</b> Diseñar una interfaz que refleje el estilo visual y la atmósfera de las películas de Ghibli.</li>
                        <li><b>Respetar derechos de autor:</b> Asegurarse de que todo el contenido utilizado esté autorizado y cumpla con las regulaciones legales.</li>
                    </ul>
                </section>
                <section id="SP" className="carta carta-4">
                    <h2>Solucion propuesta</h2>
                    <p>Desarrollar un sitio web que sirva como punto de encuentro para los fans de Studio Ghibli, ofreciendo información sobre sus películas, productos oficiales y noticias relacionadas, todo presentado de manera visualmente atractiva y coherente con su estilo artístico.</p>
                </section>
            </div>
            <div className="pie">
            </div>
        </div>
    </div>
  );
}

