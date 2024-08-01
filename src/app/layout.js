import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/_header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default : "Kiega Exims"
  },
  description: "Kiega Exims",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <body className={inter.className} style={{background:"url('/assets/pattern.png')"}}>
        <Header className="roboto-regular"/>
        {children}
      </body>
    </html>
  );
}
