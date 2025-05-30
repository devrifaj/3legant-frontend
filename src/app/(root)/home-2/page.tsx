import { BannerGrid, Footer, NewsLetter, WhyChooseUs } from "@/components";
import { home2BannerGridData } from "@/constants";

const HomePage_2 = () => {
  return (
    <>
      <main className="flex-1">
        <BannerGrid data={home2BannerGridData} />
        <WhyChooseUs variant="home-2" />
        <NewsLetter variant="home2" />
      </main>
      <Footer variant="home-2" />
    </>
  );
};

export default HomePage_2;
