"use client";
import Link from "next/link";
import DeskNav from "./DeskNav";
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "@/icons";
import { useState } from "react";
import DeskSearch from "./DeskSearch";
import MobNav from "./MobNav";
import FlyoutCart from "../cart/FlyoutCart";
import NotificationOffer from "./NotificationOffer";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <>
      {/* offer notification */}
      <NotificationOffer />

      {/* header */}
      <header className="py-1.5 z-30">
        <div className="wrapper">
          <nav className="flex-between">
            {/* header left */}
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
                className="text-base font-medium text-black md:text-lg lg:text-2xl font-poppins"
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
                className="hidden hover:scale-105 xs:block"
                onClick={() => setSearchOpen(true)}
              >
                <SearchIcon />
              </button>

              {/* user icon */}
              <button className="hover:scale-105">
                <UserIcon />
              </button>

              {/* cart link */}
              <Link className="relative inline-block" href="/cart">
                <span className="hover:scale-105 inline-flex items-center h-full">
                  <ShoppingBagIcon />
                </span>

                {cartItems.length > 0 && (
                  <p className="absolute -top-2 -right-2 w-5 h-5 flex-center pr-0.5 bg-neutral-7 text-white text-xs font-bold rounded-full">
                    {cartItems.length}
                  </p>
                )}
              </Link>
            </div>
          </nav>
        </div>

        {/* desktop search */}
        <DeskSearch isSearchOpen={isSearchOpen} setSearchOpen={setSearchOpen} />

        {/* mobile nav */}
        <MobNav isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

        {/* flyout cart*/}
        <FlyoutCart />
      </header>
    </>
  );
};

export default Header;
