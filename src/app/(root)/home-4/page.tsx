import { Blog, Footer_2, WhyChooseUs } from "@/components";
import { home4BlogData } from "@/constants";

const HomePage_4 = () => {
  return (
    <>
      <main className="flex-1">
        <Blog blogs={home4BlogData}/>
        <WhyChooseUs variant="home-4" />
      </main>
      <Footer_2 variant="home-4" />
    </>
  );
};

export default HomePage_4;
