import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "1rem" }}>
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center text-center">
        
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          We are under development.
        </p>
        <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Contact us at: <a href="mailto:pantharinfohub121@gmail.com">pantharinfohub121@gmail.com</a>
        </p>
      </main>
    </div>
  );
}
