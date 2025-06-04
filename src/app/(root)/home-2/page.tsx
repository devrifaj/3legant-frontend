import {
  BannerGrid,
  BrandLogoSlider,
  Footer,
  Hero2,
  NewsLetter,
  WhyChooseUs,
} from "@/components";
import { home2BannerGridData, home2BrandLogoSliderData } from "@/constants";

const HomePage_2 = () => {
  return (
    <>
      <main className="flex-1">
        <Hero2 />
        <BrandLogoSlider variant="home2" data={home2BrandLogoSliderData} />
        <BannerGrid data={home2BannerGridData} />
        <WhyChooseUs variant="home-2" />
        <NewsLetter variant="home2" />
      </main>
      <Footer variant="home-2" />
    </>
  );
};

export default HomePage_2;
