import React from "react";

export default function Home(){
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

