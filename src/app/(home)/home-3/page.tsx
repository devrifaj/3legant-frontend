import {
  Banner,
  BannerGrid,
  Blog,
  Footer_2,
  Home3Hero,
  Home3ShopByCategories,
  InstagramNewsFeed,
  NewsLetter,
  ProductCarousel,
} from "@/components";
import {
  home3BannerData,
  home3BannerGridData,
  home3BlogData,
  home3FeaturedData,
  home3InstagramNewsFeedData,
} from "@/constants";

const HomePage_3 = () => {
  return (
    <>
      <main className="flex-1">
        <Home3Hero />
        <ProductCarousel title="Featured" products={home3FeaturedData} />
        <Home3ShopByCategories />
        <Banner bannerData={{...home3BannerData, variant: "home3"}} />
        <BannerGrid data={home3BannerGridData} />
        <Blog blogs={home3BlogData} />
        <NewsLetter variant="home3" />
        <InstagramNewsFeed
          variant="home3"
          images={home3InstagramNewsFeedData}
        />
      </main>
      <Footer_2 variant="home-3" />
    </>
  );
};

export default HomePage_3;
