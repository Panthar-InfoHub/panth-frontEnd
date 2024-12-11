import { Lexend } from "next/font/google";
import "./globals.css";

const UbuntuFont = Lexend({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["200", "300", '400', "500", "600", "700"],
});


export const metadata = {
  title: "Panthar InfoHub",
  description: "A tech service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${UbuntuFont.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
