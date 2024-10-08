import { Inter } from "next/font/google";
import "./globals.css";
import "./utility.css"
import Header from "../components/_header/page";
import Footer from "@/components/_footer/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapConfig from "@/components/_bootstrap_config/page";
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeaderMain from "@/components/header_/page";
import BootStrap from "@/components/bootStrap";



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
      <BootstrapConfig />
      <body className={inter.className} style={{background:"url('/assets/pattern.png')"}}>
        <HeaderMain className="roboto-regular" />
        {/* <Header className="roboto-regular"/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
