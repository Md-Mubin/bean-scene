import Navbar from "@/components/Navbar";
import "./globals.css";
import { Nunito, Clicker_Script } from 'next/font/google';
import Footer from "@/components/Footer";

export const brandFont = Nunito({preload: false });
export const logoFont = Clicker_Script({ weight: '400', subsets: ['latin'], preload: false  });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Bean Scene</title>
      <body className={brandFont.className}>
        <div className="sticky top-0 z-[100]">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
