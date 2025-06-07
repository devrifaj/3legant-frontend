import {
  BannerGrid,
  Blog,
  Footer_2,
  InstaNewsFeed,
  NewsLetter,
  ProductCarousel,
} from "@/components";
import {
  home3BannerGridData,
  home3BlogData,
  home3FeaturedData,
} from "@/constants";

const HomePage_3 = () => {
  return (
    <>
      <main className="flex-1">
        <ProductCarousel title="Featured" products={home3FeaturedData} />
        <BannerGrid data={home3BannerGridData} />
        <Blog blogs={home3BlogData} />
        <NewsLetter variant="home3" />
        <InstaNewsFeed />
      </main>
      <Footer_2 variant="home-3" />
    </>
  );
};

export default HomePage_3;
