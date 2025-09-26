import { ArrowRightIcon } from "@/icons";
import { BlogProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs, variant }: BlogProps) => {
  const isHome1 = variant === "home1";

  return (
    <section className="py-10 lg:py-20">
      <div className="wrapper">
        <div className="mb-10 flex items-end justify-between md:items-center">
          {/* Section Title */}
          <h4 className="section-title w-1/2">{isHome1 ? "Articles" : "Latest Articles"}</h4>

          {/* More Articles Link */}
          <Link
            className="group inline-flex items-center justify-end gap-1 border-b border-neutral-7 text-sm font-medium text-neutral-7 lg:text-base"
            href="#"
          >
            {isHome1 ? "More Articles" : "View More"}
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
          {blogs.map((blog) => (
            <div key={blog._id}>
              {/* Blog Image */}
              <div className="mb-4 h-[280px] lg:mb-6 lg:h-[325px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div>
                <p className="mb-2 font-poppins text-base font-semibold text-[#23262F] lg:text-xl lg:font-medium">
                  {blog.title}
                </p>
                <Link
                  className="group inline-flex items-center gap-1 border-b border-neutral-7 text-sm font-medium text-neutral-7 lg:text-base"
                  href={blog.link}
                >
                  Read More
                  <span className="transition-transform group-hover:translate-x-1 lg:text-neutral-4">
                    <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
