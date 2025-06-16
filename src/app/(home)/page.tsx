import {
  BannerGrid,
  Blog,
  Footer,
  HeroSlider,
  Home1Banner,
  NewArrival,
  NewsLetter,
  Tagline,
  WhyChooseUs,
} from "@/components";
import { home1BannerGridData, home1BlogData } from "@/constants";

const HomePage_1 = () => {
  return (
    <>
      <main className="flex-1">
        <HeroSlider />
        <Tagline />
        <BannerGrid variant="home1" data={home1BannerGridData} />
        <NewArrival />
        <WhyChooseUs variant="home-1" />
        <Home1Banner />
        <Blog variant="home1" blogs={home1BlogData} />
        <NewsLetter variant="home1" />
      </main>

      <Footer variant="home-1" />
    </>
  );
};

export default HomePage_1;
