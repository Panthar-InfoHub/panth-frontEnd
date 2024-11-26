import { Poppins } from "next/font/google";
import "./globals.css";

const Poppin = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['200', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Panthar InfoHub",
  description: "A tech service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Poppin.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
