import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { email, names, last_names, phone, birth_date } = body;

    // Validar que venga el correo (clave primaria lógica)
    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Falta el correo del usuario", status: 400 }
      );
    }

    // Verificar si el usuario existe
    const { data: existingUser, error: findError } = await supabase
      .from("accounts")
      .select("*")
      .eq("email", email)
      .single();

    if (findError || !existingUser) {
      return NextResponse.json(
        { ok: false, error: "Usuario no encontrado con ese correo", status: 404 }
      );
    }

    // Crear objeto con los campos que sí se enviaron
    const updateData: Record<string, any> = {};
    if (names) updateData.names = names;
    if (last_names) updateData.last_names = last_names;
    if (phone) updateData.phone = phone;
    if (birth_date) updateData.birth_date = birth_date;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { ok: false, error: "No se enviaron datos para actualizar",status: 400 }
      );
    }

    // Actualizar datos según el correo
    const { data, error } = await supabase
      .from("accounts")
      .update(updateData)
      .eq("email", email)
      .select("*")
      .single();

    if (error) {
      console.error("Error al actualizar:", error);
      return NextResponse.json(
        { ok: false, error: "Error al actualizar los datos" ,status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "✅ Datos actualizados correctamente",status: 200 }
    );
  } catch (err) {
    console.error("Error inesperado:", err);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" ,status: 500 }
    );
  }
}
