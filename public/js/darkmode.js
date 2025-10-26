document.addEventListener('DOMContentLoaded', () => {
    const fondo = document.querySelector('.fondo');
const menu = document.querySelector('.menu');
const btn = document.getElementById('cambio_tema');
const linkMenus = document.querySelectorAll('.linkMenu > a'); 
const carta=document.querySelectorAll('.carta')
const logo=document.querySelector('.Logo')
const formulario = document.querySelector('.formulario');
const inputs = document.querySelectorAll('.input');
const labels = document.querySelectorAll('.label');
const botones = document.querySelectorAll('.boton');
let bandera = true;

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  cambio();
});

function cambio() {
  if (bandera) {
    fondo.style.backgroundImage = "url('/fondoGhibli.png'), linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)";
    fondo.style.backgroundSize = "cover";
    fondo.style.backgroundRepeat = "no-repeat";
    fondo.style.backgroundPosition = "center";
    menu.style.background="linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)"
    logo.style.background="linear-gradient(to bottom, #0B1D3A, #1E3A5F, #2E4A7D, #6B5B95)"
    linkMenus.forEach(link => {
      link.style.background = "black";
      link.style.color = "#e9e4e4ff";
    });
    carta.forEach(link => {
      link.style.background = "rgba(108, 122, 137)";
      link.style.color = "#e6e6f0";
      link.style.border="3px solid rgba(255, 230, 200, 0.1)";
    });
    formulario.style.backgroundColor = '#2e3c4f';
    formulario.style.color = '#e6e6f0';
    formulario.style.border = '4px solid #8c7ae6';

    inputs.forEach(input => {
    input.style.backgroundColor = '#3c4c5f';
    input.style.color = '#e6e6f0';
    input.style.border = '2px solid #8c7ae6';
    });

    labels.forEach(label => {
    label.style.backgroundColor = '#3c4c5f';
    label.style.color = '#e6e6f0';
    label.style.border = "0px solid #8c7ae6";
    });
    menu.style.background = "linear-gradient(to top, rgba(10,31,68,0.7), rgba(21,57,96,0.7), rgba(42,75,124,0.7), rgba(92,107,143,0.7), rgba(138,155,177,0.7))";
     botones.forEach(boton => {
    boton.style.backgroundColor = '#3c4c5f';
    boton.style.color = '#e6e6f0';
    boton.style.border = '2px solid #8c7ae6';
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
      link.style.background = '';
      link.style.color = '';
    });
    carta.forEach(link => {
      link.style.background = "";
      link.style.color = "";
      link.style.border="";
    });
    formulario.style.backgroundColor = '';
    formulario.style.color = '';
    formulario.style.border = '';

    inputs.forEach(input => {
    input.style.backgroundColor = '';
    input.style.color = '';
    input.style.border = '';
    });

    labels.forEach(label => {
    label.style.backgroundColor = '';
    label.style.color = '';
    label.style.border = "";
    });
    menu.style.background = "";
     botones.forEach(boton => {
    boton.style.backgroundColor = '';
    boton.style.color = '';
    boton.style.border = '';
    });
    bandera = true;
  }
}
});