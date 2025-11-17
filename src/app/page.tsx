import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowRight, Funnel, Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-1 w-screen h-screen bg-zinc-800 text-white">
      <div className=" bg-zinc-900 w-1/6 p-4 rounded-tr-md rounded-br-md flex flex-col items-center space-y-4  shadow-2xl">
        <div className="w-full px-4 mt-5 text-3xl font-bold text-center">
          <h1>Auth-SIEM</h1>
          <Separator className="mt-4" />
        </div>
        <div className=" w-full flex flex-col justify-start   px-4 flex-1 ">
          <div className=" h-1/2 flex flex-col justify-evenly ">
            <div className="text-lg hover:cursor-pointer hover:text-violet-300">
              <div className="flex justify-between px-2">
                <span>Alertas</span>
                <ArrowRight />
              </div>
              <Separator />
            </div>
            <div className="text-lg hover:cursor-pointer hover:text-violet-300">
              <div className="flex justify-between px-2">
                <span>Dashboard</span>
                <ArrowRight />
              </div>
              <Separator />
            </div>
            <div className="text-lg hover:cursor-pointer hover:text-violet-300">
              <div className="flex justify-between px-2">
                <span>Logs</span>
                <ArrowRight />
              </div>
              <Separator />
            </div>
          </div>
        </div>
        <div className="  w-full h-20 px-4 flex flex-col justify-evenly ">
          <Separator />
          <Button
            className="w-full hover:cursor-pointer hover:bg-violet-300/80 hover:text-zinc-50 shadow-2xl "
            variant={"secondary"}
          >
            SAIR
          </Button>
        </div>
      </div>
      <div className="bg-zinc-900 flex-1 rounded-tl-md rounded-bl-md p-4 flex flex-col justify-start ">
        <div className="w-full p-4">
          <div className="flex justify-between items-center gap-10 px-2">
            <h1 className="text-3xl font-bold">LOGS</h1>
            <div className="flex-1 flex justify-end items-center gap-3">
              <div className="relative w-2/3">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-violet-400 w-5 h-5" />
                <input
                  name="teste"
                  type="text"
                  placeholder="Filtrar"
                  className="border border-zinc-200 shadow-2xl rounded-2xl px-4 py-2 focus:outline-violet-400 focus:border-violet-400 w-full placeholder:text-violet-300"
                />
              </div>
              <Funnel className="text-violet-400" />
            </div>
          </div>
          <Separator className="mt-3" />
        </div>
        <div className=" flex-1 w-full p-4 flex justify-center ">
          <div className=" w-4/5  ">
            <div className="grid h-56 grid-cols-3 content-start gap-4 ...">
              <Item variant="outline" className="max-w-2/3 border-violet-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: ok</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-violet-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: ok</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-violet-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: ok</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-red-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: falha</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                    <li>tentativa: 4</li>
                    <li>ataque: brute force</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-red-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: falha</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                    <li>tentativa: 3</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-red-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: falha</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                    <li>tentativa: 2</li>
                  </ul>
                </ItemContent>
              </Item>
              <Item variant="outline" className="max-w-2/3 border-red-400">
                <ItemContent>
                  <ItemTitle>log-879574 auth</ItemTitle>
                  <ul>
                    <li>status: falha</li>
                    <li>ip: 192.168.3.1</li>
                    <li>origem: sistema de autenticação</li>
                    <li>tentativa: 1</li>
                  </ul>
                </ItemContent>
              </Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
