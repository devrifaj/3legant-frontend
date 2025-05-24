import { BannerGrid, Footer_2 } from "@/components";
import { home3BannerGridData } from "@/constants";

const HomePage_3 = () => {
  return (
    <>
      <main className="flex-1">
        <BannerGrid data={home3BannerGridData} />
      </main>
      <Footer_2 variant="home-3" />
    </>
  );
};

export default HomePage_3;
