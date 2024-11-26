import Navbar from "@/components/Navbar";
import LenisDiv from "@/lib/LenisDiv";

export default function RootLayout({ children }) {
    return (
        <LenisDiv>
            <main className="px-4 py-2 flex flex-col gap-8" >
                <Navbar />
                {children}
            </main>
        </LenisDiv>
    )
}