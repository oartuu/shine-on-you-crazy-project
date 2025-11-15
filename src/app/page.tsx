
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex w-screen h-screen items-center justify-around">
      <Link href={"/auth/login"}> Login</Link>
      <Link href={"/auth/signup"}> Sign-up</Link>
    </div>
    
  );
}
