import { navItems } from "@/constants";
import { DropDownIcon } from "@/icons";
import Link from "next/link";

const DeskNav = () => {
  return (
    <ul className="hidden gap-6 md:flex lg:gap-10">
      {navItems.map((item, index) =>
        /* if any item has children, render it as a dropdown */
        item.children ? (
          <li
            key={index}
            className="group/item relative cursor-pointer py-3 font-space-grotesk font-medium transition-all"
          >
            {/* top link of the dropdown */}
            <Link
              className="flex items-center gap-1 font-space-grotesk text-sm text-neutral-7 lg:text-base"
              href={item.route}
            >
              {item.label}
              <span className="transition-all group-hover/item:rotate-180">
                <DropDownIcon />
              </span>
            </Link>

            {/* dropdown menu */}
            <ul className="invisible absolute top-12 -left-2 z-20 min-w-60 flex-col gap-2 rounded-xl border-[1.5px] border-neutral-2 bg-white px-3 py-2 text-sm opacity-0 shadow-dropdown transition duration-200 ease-in-out group-hover/item:visible group-hover/item:flex group-hover/item:opacity-100">
              {item.children.map((child) => (
                <li className="group/link relative" key={child.label}>
                  {/* dropdown top link */}
                  <Link
                    className="flex-between w-full gap-1 rounded-lg p-2 text-neutral-4 transition-all duration-200 group-hover/link:bg-neutral-2 group-hover/link:text-neutral-7"
                    href={child.route}
                  >
                    {child.label}
                    {child.children && (
                      <span className="transition-all group-hover/link:-rotate-180">
                        <DropDownIcon />
                      </span>
                    )}
                  </Link>

                  {/* if dropdown has children, render it as a dropdown */}
                  {child.children && (
                    <ul className="group-hover:/link:flex invisible absolute top-1 -right-[100%] z-20 min-w-52 flex-col gap-2 rounded-xl border-[1.5px] border-neutral-2 bg-white px-3 py-2 text-sm opacity-0 shadow-dropdown transition duration-200 ease-in-out group-hover/link:visible group-hover/link:opacity-100">
                      {child.children.map((subChild) => (
                        <li key={subChild.label}>
                          {/* dropdown child link */}
                          <Link
                            className="inline-block w-full rounded-lg p-2 text-neutral-4 transition-all duration-200 hover:bg-neutral-2 hover:text-neutral-7"
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
            <Link className="font-space-grotesk text-sm lg:text-base" href={item.route}>
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default DeskNav;
