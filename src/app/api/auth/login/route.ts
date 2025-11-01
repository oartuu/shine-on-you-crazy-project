import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"
export async function POST (res: Request){


    const {email, password} = await res.json()

    const user = await prisma.user.findUnique({where: {email}})
   


    if (!user){

        return NextResponse.json({

            error:"Usuário não encontrado",
            status: 400 
        })
    }
    else if (user.password !== password){

        return NextResponse.json({

            error:"Senha incorreta",
            status: 400 
        })
    
    }

    else{
        
        


        return NextResponse.json({
            
            message: "Usuário logado com sucesso",
            user,
            status: 200

        })
    }

}