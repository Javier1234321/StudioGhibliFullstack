import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req : Request) {

    const body =  await req.json()

    const {names , birth_date , email , password_hash ,phone,last_names } = body;

    if(!names || !birth_date || !email || !password_hash || !phone || !last_names){
        return NextResponse.json({ok: false , error : 'Faltan datos en la petición',status : 400})
    }
     const { data: existingUser } = await supabase
      .from("accounts")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { ok: false, error: "El correo ya está registrado" },
        { status: 409 } // 409 Conflict
      );
    }
    const { data: existingUser1 } = await supabase
      .from("accounts")
      .select("phone")
      .eq("phone", phone)
      .single();
    if (existingUser1) {
      return NextResponse.json(
        { ok: false, error: "El numero de telfono ya existe" },
        { status: 408 }
      );
    }
    
    const {data , error} = await supabase.from('accounts').insert({
        names,
        birth_date,
        email,
        password_hash,
        phone,
        last_names
    }).select('*').single();

    if(error){
        return NextResponse.json({ok: false , error, status : 400})
    }

    return NextResponse.json({ok:true , status : 201})

}