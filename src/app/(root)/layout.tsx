import { Footer, Header } from "@/components";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer variant="home-1" />
    </>
  );
};

export default MainLayout;
