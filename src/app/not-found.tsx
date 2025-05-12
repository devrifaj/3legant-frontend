import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="font-inter font-medium md:text-7xl lg:text-[90px] xl:text-[110px] leading-[115px] inline-block md:mb-6">
        404 Not Found
      </h2>

      <p className="mb-12 xl:mb-20">
        Your visited page not found. You may go home page.
      </p>
      <Link className="button-primary inline-block" href="/">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
