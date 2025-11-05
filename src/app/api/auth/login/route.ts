import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/auth";

export async function POST(res: Request) {
  const { email, password } = await res.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({
      error: "Usuário não encontrado",
      status: 400,
    });
  }
  const valid = await comparePassword(password, user.password);

  if (!valid) {
    return NextResponse.json({
      error: "senha incorreta",
      status: 400,
    });
  }else {
    return NextResponse.json({
      error: "usuário logado",
      user,
      status: 200,
    });
  }
}
