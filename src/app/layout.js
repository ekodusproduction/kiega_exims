import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/_header/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapConfig from "@/components/_bootstrap_config/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default : "Kiega Exims",
    template : "%s | Kiega Exims"
  },
  description: "Kiega Exims",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <BootstrapConfig />
      <body className={inter.className} style={{background:"url('/assets/pattern.png')"}}>
        <Header className="roboto-regular"/>
        {children}
      </body>
    </html>
  );
}
