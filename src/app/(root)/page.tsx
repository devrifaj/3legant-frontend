import {
  BannerGrid,
  Footer,
  HeroSlider,
  NewArrival,
  Tagline,
  WhyChooseUs,
} from "@/components";
import { home1BannerGridData } from "@/constants";

const HomePage_1 = () => {
  return (
    <>
      <main className="flex-1">
        <HeroSlider />
        <Tagline />
        <BannerGrid data={home1BannerGridData} />
        <NewArrival />
        <WhyChooseUs variant="home-1" />
      </main>

      <Footer variant="home-1" />
    </>
  );
};

export default HomePage_1;
