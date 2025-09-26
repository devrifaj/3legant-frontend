"use client";
import Link from "next/link";
import DeskNav from "./DeskNav";
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "@/icons";
import { useState } from "react";
import DeskSearch from "./DeskSearch";
import MobNav from "./MobNav";
import FlyoutCart from "../cart/FlyoutCart";
import NotificationOffer from "./NotificationOffer";
import { useAppSelector } from "@/hooks";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      {/* offer notification */}
      <NotificationOffer />

      {/* header */}
      <header className="z-30 py-1.5">
        <div className="wrapper">
          <nav className="flex-between">
            {/* header left */}
            <div className="flex items-center gap-2">
              {/* hamburger menu for mobile */}
              <button onClick={() => setMenuOpen(true)} className="block md:hidden">
                <MenuIcon className="h-10 w-10" />
              </button>

              {/* logo */}
              <Link
                className="font-poppins text-base font-medium text-black md:text-lg lg:text-2xl"
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
              {user && (
                <button className="hover:scale-105">
                  <UserIcon />
                </button>
              )}

              {/* cart link */}
              <Link className="relative inline-block" href="/cart">
                <span className="inline-flex h-full items-center hover:scale-105">
                  <ShoppingBagIcon />
                </span>

                {cartItems.length > 0 && (
                  <p className="flex-center absolute -top-2 -right-2 h-5 w-5 rounded-full bg-neutral-7 p-0.5 text-center text-xs font-bold text-white">
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
