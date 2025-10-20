import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req : Request) {

    const body =  await req.json()

    const {names , birth_date , email , password_hash ,phone,last_names } = body;

    if(!names || !birth_date || !email || !password_hash || !phone || !last_names){
        return NextResponse.json({ok: false , error : 'Faltan datos en la petición'} , {status : 400})
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
        return NextResponse.json({ok: false , error} , {status : 400})
    }

    return NextResponse.json({ok:true , client : data}, {status : 201})

}