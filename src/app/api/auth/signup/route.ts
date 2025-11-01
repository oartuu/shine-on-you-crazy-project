import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, password, email } = await req.json();

  const existing = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existing) {
    return NextResponse.json({
      error: "email já cadastrado",
      status: 400,
    });
  } else {
    const user = await prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });

    return NextResponse.json({
      message: "Usuário criado com sucesso",
      user,
    });
  }
}
