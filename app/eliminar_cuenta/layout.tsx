// app/registrar/RegistrarLayout.tsx
'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import "../../styles/menu.css";
import "../../styles/registroLogin.css";
import "../../styles/formulario.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RegistrarLayout({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    const fondo = document.querySelector('.fondo') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;
    const btn = document.getElementById('cambio_tema');
    const linkMenus = document.querySelectorAll('.linkMenu > a');
    const carta = document.querySelectorAll('.carta');
    const logo = document.querySelector('.Logo') as HTMLElement;
    const formulario = document.querySelector('.formulario') as HTMLElement;
    const inputs = document.querySelectorAll('.input');
    const labels = document.querySelectorAll('.label');
    const botones = document.querySelectorAll('.boton');
    let bandera = true;

    if (!btn) return;

    const cambio = () => {
      if (!fondo || !menu || !logo || !formulario) return;

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
        carta.forEach(c => {
          (c as HTMLElement).style.background = "rgba(108, 122, 137)";
          (c as HTMLElement).style.color = "#e6e6f0";
          (c as HTMLElement).style.border="3px solid rgba(255, 230, 200, 0.1)";
        });
        formulario.style.backgroundColor = '#2e3c4f';
        formulario.style.color = '#e6e6f0';
        formulario.style.border = '4px solid #8c7ae6';

        inputs.forEach(input => {
          (input as HTMLElement).style.backgroundColor = '#3c4c5f';
          (input as HTMLElement).style.color = '#e6e6f0';
          (input as HTMLElement).style.border = '2px solid #8c7ae6';
        });

        labels.forEach(label => {
          (label as HTMLElement).style.backgroundColor = '#3c4c5f';
          (label as HTMLElement).style.color = '#e6e6f0';
          (label as HTMLElement).style.border = "0px solid #8c7ae6";
        });

        botones.forEach(boton => {
          (boton as HTMLElement).style.backgroundColor = '#3c4c5f';
          (boton as HTMLElement).style.color = '#e6e6f0';
          (boton as HTMLElement).style.border = '2px solid #8c7ae6';
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
        carta.forEach(c => {
          (c as HTMLElement).style.background = "";
          (c as HTMLElement).style.color = "";
          (c as HTMLElement).style.border="";
        });
        formulario.style.backgroundColor = '';
        formulario.style.color = '';
        formulario.style.border = '';

        inputs.forEach(input => {
          (input as HTMLElement).style.backgroundColor = '';
          (input as HTMLElement).style.color = '';
          (input as HTMLElement).style.border = '';
        });

        labels.forEach(label => {
          (label as HTMLElement).style.backgroundColor = '';
          (label as HTMLElement).style.color = '';
          (label as HTMLElement).style.border = "";
        });

        botones.forEach(boton => {
          (boton as HTMLElement).style.backgroundColor = '';
          (boton as HTMLElement).style.color = '';
          (boton as HTMLElement).style.border = '';
        });
        bandera = true;
      }
    };

    btn.addEventListener('click', cambio);

    return () => {
      btn.removeEventListener('click', cambio);
    };
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
