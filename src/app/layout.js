import Navbar from "@/components/Navbar";
import "./globals.css";
import { Nunito, Clicker_Script } from 'next/font/google';

export const brandFont = Nunito();
export const logoFont = Clicker_Script({ weight: '400' });

export const metadata = {
  title: "Bean Scene",
  description: "Coffe Shop Coffe Beans Next.js react next web developer Mubin Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={brandFont.className}>
        <div className="sticky top-0">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
