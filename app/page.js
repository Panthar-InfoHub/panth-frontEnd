import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col" >
      <header className="p-4">
        <Image src="/logo.svg" alt="Logo" width={144} height={35} />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center text-center">

        <p className="text-2xl font-bold">
          We are under development.
        </p>
        <p className="mt-4 text-xl">
          Contact us at: <a href="mailto:pantharinfohub121@gmail.com">pantharinfohub121@gmail.com</a>
        </p>
      </main>
    </div>
  );
}
