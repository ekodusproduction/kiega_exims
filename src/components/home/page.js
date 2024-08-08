import Home from "@/app/page"
import HomeBanner from "./_home-banner/page"
import FreshAndOrganic from "./_fresh-and-organic/page";

export const metadata = {
      title:"Home Page | Kiega Exims",
      description: "Kiega Exims",
};

export default function HomePage(){

    return (
        <>
            <HomeBanner/>
            <FreshAndOrganic />
        </>
        
    )
}