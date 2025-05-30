import { navItems } from "@/constants";
import { DropDownIcon } from "@/icons";
import Link from "next/link";

const DeskNav = () => {
  return (
    <ul className="hidden md:flex lg:gap-10 gap-6">
      {navItems.map((item, index) =>
        /* if any item has children, render it as a dropdown */
        item.children ? (
          <li
            key={index}
            className="py-3 cursor-pointer relative group/item transition-all font-medium font-space-grotesk"
          >
            {/* top link of the dropdown */}
            <Link
              className="flex items-center gap-1 lg:text-base text-sm font-space-grotesk text-neutral-7"
              href={item.route}
            >
              {item.label}
              <span className="group-hover/item:rotate-180 transition-all">
                <DropDownIcon />
              </span>
            </Link>

            {/* dropdown menu */}
            <ul className="absolute top-12 -left-2 min-w-60 bg-white z-20 border-[1.5px] border-neutral-2 shadow-dropdown px-3 py-2 rounded-xl transition ease-in-out duration-200 opacity-0 invisible group-hover/item:flex flex-col gap-2 text-sm group-hover/item:opacity-100 group-hover/item:visible">
              {item.children.map((child) => (
                <li className="relative group/link" key={child.label}>
                  {/* dropdown top link */}
                  <Link
                    className="flex-between gap-1 p-2 text-neutral-4 group-hover/link:text-neutral-7 group-hover/link:bg-neutral-2 rounded-lg w-full transition-all duration-200"
                    href={child.route}
                  >
                    {child.label}
                    {child.children && (
                      <span className="group-hover/link:-rotate-180 transition-all">
                        <DropDownIcon />
                      </span>
                    )}
                  </Link>

                  {/* if dropdown has children, render it as a dropdown */}
                  {child.children && (
                    <ul className="absolute -right-[100%] top-1 min-w-52 bg-white z-20 border-[1.5px] border-neutral-2 shadow-dropdown px-3 py-2 transition ease-in-out duration-200 opacity-0 invisible group-hover:/link:flex flex-col gap-2 text-sm group-hover/link:opacity-100 group-hover/link:visible rounded-xl">
                      {child.children.map((subChild) => (
                        <li key={subChild.label}>
                          {/* dropdown child link */}
                          <Link
                            className="p-2 text-neutral-4 hover:text-neutral-7 hover:bg-neutral-2 rounded-lg w-full transition-all duration-200 inline-block"
                            href={subChild.route}
                          >
                            {subChild.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ) : (
          /* if item don't have children, render it as a normal link */
          <li className="py-3" key={index}>
            <Link
              className="lg:text-base text-sm font-space-grotesk"
              href={item.route}
            >
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default DeskNav;
