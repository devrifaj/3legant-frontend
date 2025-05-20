"use client";
import Link from "next/link";
import DeskNav from "./DeskNav";
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "@/icons";
import { useState } from "react";
import DeskSearch from "./DeskSearch";
import MobNav from "./MobNav";
import FlyoutCart from "../cart/FlyoutCart";
import NotiOffer from "./NotiOffer";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* offer notification */}
      <NotiOffer />

      {/* header */}
      <header className="py-1.5">
        <div className="wrapper">
          <nav className="flex-between">
            <div className="flex items-center gap-2">
              {/* hamburger menu for mobile */}
              <button
                onClick={() => setMenuOpen(true)}
                className="block md:hidden"
              >
                <MenuIcon className="w-10 h-10" />
              </button>

              {/* logo */}
              <Link
                className="text-base md:text-lg lg:text-2xl text-black font-medium font-poppins"
                href="/"
              >
                3legant<span className="text-neutral-4">.</span>
              </Link>
            </div>

            {/* desktop nav */}
            <DeskNav />

            {/* all header button */}
            <div className="flex gap-4">
              {/* desktop search */}
              <button
                className="hover:scale-105 xs:block hidden"
                onClick={() => setSearchOpen(true)}
              >
                <SearchIcon />
              </button>

              {/* user icon */}
              <button className="hover:scale-105">
                <UserIcon />
              </button>

              {/* cart icon */}
              <button
                className="hover:scale-105"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBagIcon />
              </button>
            </div>
          </nav>
        </div>

        {/* desktop search */}
        <DeskSearch isSearchOpen={isSearchOpen} setSearchOpen={setSearchOpen} />

        {/* mobile nav */}
        <MobNav isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

        {/* flyout cart*/}
        <FlyoutCart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      </header>
    </>
  );
};

export default Header;
