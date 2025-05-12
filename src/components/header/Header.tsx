import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <Link className="text-2xl text-black font-medium font-poppins" href="/">
        3legant<span className="text-neutral-4">.</span>
      </Link>
      </div>
    </header>
  );
};

export default Header;
