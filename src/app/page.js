import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Chance_Banner from "@/components/Chance_Banner";
import Discover from "@/components/Discover";
import Feedback from "@/components/Feedback";
import Menu from "@/components/Menu";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Banner />
      <Discover />
      <Menu />
      <AboutUs />
      <Chance_Banner />
      <Feedback/>
      <Subscribe/>
    </>
  );
}
