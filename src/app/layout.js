import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
import "./globals.css";
import "./utility.css"
import Footer from "@/components/_footer/page";
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';

const HeaderMain = require('@/components/header_/page')



const inter = Inter({ subsets: ["latin"] });

config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

export const metadata = {
  title: {
    default: "Kiega Exims",
    template : "%s | Kiega Exims"
  },
  description: "Kiega Exims",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="html">
      <body className={inter.className} style={{background:"url('/assets/pattern.png')"}}>
        <HeaderMain className="roboto-regular" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
