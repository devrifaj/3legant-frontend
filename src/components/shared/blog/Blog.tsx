import { ArrowRightIcon } from "@/icons";
import { BlogProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs, variant }: BlogProps) => {
  const isHome1 = variant === "home1";

  return (
    <section className="py-10 lg:py-20">
      <div className="wrapper">
        <div className="flex justify-between items-end md:items-center mb-10">
          {/* Section Title */}
          <h4 className="section-title w-1/2">
            {isHome1 ? "Articles" : "Latest Articles"}
          </h4>

          {/* More Articles Link */}
          <Link
            className="inline-flex items-center gap-1 text-neutral-7 font-medium text-sm lg:text-base border-b border-neutral-7 group  justify-end"
            href="#"
          >
            {isHome1 ? "More Articles" : "View More"}
            <span className="group-hover:translate-x-1 transition-transform">
              <ArrowRightIcon className="lg:w-5 lg:h-5 h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 lg:gap-6 md:gap-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id}>
              {/* Blog Image */}
              <div className="h-[280px] lg:h-[325px] mb-4 lg:mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div>
                <p className="lg:text-xl text-base font-semibold lg:font-medium font-poppins text-[#23262F] mb-2">
                  {blog.title}
                </p>
                <Link
                  className="inline-flex items-center gap-1 text-neutral-7 font-medium text-sm lg:text-base border-b border-neutral-7 group"
                  href={blog.link}
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform lg:text-neutral-4">
                    <ArrowRightIcon className="lg:w-5 lg:h-5 h-4 w-4" />
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
