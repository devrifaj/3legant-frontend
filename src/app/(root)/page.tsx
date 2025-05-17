import { Footer, Hero_1 } from "@/components";

const HomePage_1 = () => {
  return (
    <>
      <main className="flex-1">
        <Hero_1 />

        <div className="flex-center">This is home 1</div>
      </main>
      <Footer variant="home-1" />
    </>
  );
};

export default HomePage_1;
