import { Footer, Header, Hero_1 } from "@/components";

const Home_1 = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero_1 />

        <div className="flex-center">This is a test text</div>
      </main>
      <Footer />
    </>
  );
};

export default Home_1;
