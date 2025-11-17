'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'

const page = () => {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    type LoginData = z.infer<typeof loginSchema>

    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = (data: LoginData) => console.log(data)

  return (
    <div className='flex w-screen h-screen items-center justify-center bg-zinc-900'>
      

        <Card className='bg-zinc-700 text-zinc-50 border-none shadow-2xl'>
            <CardHeader className='text-center text-4xl font-bold'>
                <h1>Login</h1>
                <Separator/>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col gap-2 p-4'>
                    <div className='flex flex-col gap-2 [&>label]:pl-1'>
                        <label htmlFor="email">Email</label>
                        <input className='bg-zinc-100 text-zinc-950 px-2 rounded-sm shadow-2xs' {...register('email')} type="text" placeholder='ex: email@email.com' />
                    </div>
                    <div className='flex flex-col gap-2 [&>label]:pl-1'>
                        <label htmlFor="password">Senha</label>
                        <input className='bg-zinc-100 text-zinc-950 px-2 rounded-sm shadow-2xs' {...register('password')} type="password" placeholder='insira sua senha' />
                    </div>
                    <Button className='hover:cursor-pointer'>entrar</Button>
                </form>
            </CardContent>
        </Card>


    </div>
  )
}

export default page
