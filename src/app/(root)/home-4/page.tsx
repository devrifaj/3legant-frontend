import { Blog, BrandLogoSlider, Footer_2, WhyChooseUs } from "@/components";
import { home4BlogData, home4BrandLogoSliderData } from "@/constants";

const HomePage_4 = () => {
  return (
    <>
      <main className="flex-1">
        <BrandLogoSlider variant="home4" data={home4BrandLogoSliderData} />
        <Blog blogs={home4BlogData}/>
        <WhyChooseUs variant="home-4" />
      </main>
      <Footer_2 variant="home-4" />
    </>
  );
};

export default HomePage_4;
