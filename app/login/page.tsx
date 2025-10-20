import React from 'react';


export const page= () => {
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
            <h2>Login</h2>
            <form action="">
                <select className="gif">
                    <option></option>
                </select>
                <div className="form_group">
                    <input type="text" placeholder=' ' name='user' className='input' />
                    <label htmlFor="user" className='label'>Usuario</label>
                </div>
                <div className="form_group">
                    <input type="password" placeholder=' ' name='password' className='input' />
                    <label htmlFor="password" className="label">Contraseña</label>
                </div>
                <button className="boton">Enviar</button>
            </form>
                <button className='boton'>Recuperar password</button>
            </section>
        </div>
        </div>
    );
};

export default page;