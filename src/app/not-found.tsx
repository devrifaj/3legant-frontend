import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="flex-center flex-1">
      <div className="wrapper text-center">
        <h3 className="mb-2">404 Not Found</h3>
        <p className="mb-4">Your visited page not found! You may go home page.</p>
        <Link className="primary-btn inline-block !text-sm sm:!text-base" href="/">
          Back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
