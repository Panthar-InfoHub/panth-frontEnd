import Navbar from "@/components/Navbar";
import LenisDiv from "@/lib/LenisDiv";

export default function RootLayout({ children }) {
    return (
        <LenisDiv>
            <main className="pt-2 bg-[#FAF9F6] flex flex-col gap-8 w-screen overflow-hidden" >
                <Navbar />
                {children}
            </main>
        </LenisDiv>
    )
}