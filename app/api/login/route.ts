import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { names, password_hash } = await req.json();

    if (!names || !password_hash) {
      return NextResponse.json(
        { ok: false, error: "Faltan datos en la petición" },
        { status: 400 }
      );
    }

    const { data: user, error } = await supabase
      .from("accounts")
      .select("names, password_hash")
      .eq("names", names)
      .single();

    if (error || !user) {
      return NextResponse.json(
        { ok: false, error: "El usuario no existe" , status: 404 },        
      );
    }

    if (password_hash !== user.password_hash) {
      return NextResponse.json(
        { ok: false, error: "Contraseña incorrecta" ,status: 401},
      );
    }

    return NextResponse.json(
      { ok: true, message: "Inicio de sesión exitoso",  status: 200 },
    );

  } catch (err) {
    console.error("Error en login:", err);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" ,  status: 500 },
    );
  }
}
