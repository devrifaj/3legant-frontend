import Link from "next/link";
import Modal from "../ui/Modal";
import Search from "./Search";
import { navItems } from "@/constants/navigation";
import {
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  ShoppingBagIcon,
  YoutubeIcon,
} from "@/icons";

type MobNavProps = {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

// Recursive nav item renderer
const renderNavItems = (
  items: typeof navItems,
  setMenuOpen: (open: boolean) => void,
  depth = 0
) => {
  return items.map((item) => {
    const isTopLevel = depth === 0;
    const liClasses = isTopLevel ? "border-b border-neutral-3 py-2" : "";

    if (item.children && item.children.length > 0) {
      return (
        <li key={item.label} className={liClasses}>
          <details>
            <summary>{item.label}</summary>
            <ul className="ml-4">
              {renderNavItems(item.children, setMenuOpen, depth + 1)}
            </ul>
          </details>
        </li>
      );
    }

    return (
      <li key={item.label} className={liClasses}>
        <Link href={item.route} onClick={() => setMenuOpen(false)}>
          {item.label}
        </Link>
      </li>
    );
  });
};

const MobNav = ({ isMenuOpen, setMenuOpen }: MobNavProps) => {
  return (
    <Modal
      isOpen={isMenuOpen}
      onClose={() => setMenuOpen(false)}
      position="left"
    >
      <div className="flex flex-col justify-between h-full">
        {/* logo, search and menu */}
        <div>
          {/* logo */}
          <Link
            className="text-base text-black font-medium font-poppins mb-4 inline-block"
            href="/"
          >
            3legant<span className="text-neutral-4">.</span>
          </Link>

          {/* search */}
          <div className="xs:hidden">
            <Search />
          </div>

          {/* menu */}
          <ul className="menu rounded-box w-full p-0 font-medium mt-4">
            {renderNavItems(navItems, setMenuOpen)}
          </ul>
        </div>

        {/* cart, wishlist and sign in link */}
        <div>
          {/* cart */}
          <div className="flex-between py-2 border-b border-neutral-3">
            <span className="text-lg font-medium  text-neutral-4">Cart</span>

            <Link href="/cart" onClick={() => setMenuOpen(false)}>
              <ShoppingBagIcon />
            </Link>
          </div>

          {/* wishlist */}
          <div className="flex-between py-2 border-b border-neutral-3 mb-5">
            <span className="text-lg font-medium  text-neutral-4">
              Wishlist
            </span>

            <Link href="/wishlist" onClick={() => setMenuOpen(false)}>
              <HeartIcon />
            </Link>
          </div>

          {/* sign in link */}
          <Link
            className="button-primary inline-block mb-5"
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>

          {/* social links */}
          <div className="flex gap-6 text-neutral-7">
            <Link href="#">
              <InstagramIcon />
            </Link>
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <YoutubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MobNav;
