import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password_hash } = body;

  // Validación básica
  if (!email || !password_hash) {
    return NextResponse.json(
      { ok: false, error: "Faltan datos en la petición" },
      { status: 400 }
    );
  }

  // Buscar al usuario por correo
  const { data: user, error: userError } = await supabase
    .from("accounts")
    .select("*")
    .eq("email", email)
    .single();

  if (userError || !user) {
    return NextResponse.json(
      { ok: false, error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  // Verificar contraseña
  if (user.password_hash !== password_hash) {
    return NextResponse.json(
      { ok: false, error: "Contraseña incorrecta" },
      { status: 401 }
    );
  }

  // Eliminación permanente del usuario
  const { error: deleteError } = await supabase
    .from("accounts")
    .delete()
    .eq("email", email);

  if (deleteError) {
    return NextResponse.json(
      { ok: false, error: "Error al eliminar la cuenta" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { ok: true, message: "Cuenta eliminada permanentemente" },
    { status: 200 }
  );
}
