import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password_hash } = await req.json();

    if (!email || !password_hash) {
      return NextResponse.json(
        { ok: false, error: "Faltan datos" },
        { status: 400 }
      );
    }

    // Buscar usuario
    const { data: user, error: selectError } = await supabase
      .from('accounts')
      .select('*')
      .eq('email', email)
      .single();

    if (selectError || !user) {
      return NextResponse.json(
        { ok: false, error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Actualizar contraseña sin encriptar
    const { error: updateError } = await supabase
      .from('accounts')
      .update({ password_hash: password_hash })
      .eq('email', email);

    if (updateError) {
      return NextResponse.json(
        { ok: false, error: "Error al actualizar contraseña" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Contraseña actualizada correctamente" },
      { status: 200 }
    );

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
