import Home from "@/app/page";
import HomeBanner from "./_home-banner/page";
import FreshAndOrganic from "./_fresh-and-organic/page";
import FarmingOrganic from "./_farming-organic/page";
import WhatWeOffer from "./_what-we-offer/page";
import NewHotProducts from "./_new-hot-products/page";
import WhyChooseKiega from "./_why-choose-kiega/page";
import Awesomefarmerteam from "./_Awesome-farmer-team/page";
import OurFeedbacks from "./_our-feedbacks/page";

export const metadata = {
  title: "Home Page | Kiega Exims",
  description: "Kiega Exims",
};

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <FreshAndOrganic />
      <FarmingOrganic />
      <WhatWeOffer />
      <NewHotProducts />
      <WhyChooseKiega />
      <Awesomefarmerteam />
      <OurFeedbacks />
    </>
  );
}
