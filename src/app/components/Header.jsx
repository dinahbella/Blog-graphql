import Link from "next/link";
import React from "react";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web development", slug: "web-development" },
  { name: "Javascript", slug: "javascript" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-yellow-700 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white hover:text-yellow-700">
              Dinah
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-3 align-middle text-white ml-4 font-bold hover:text-yellow-700 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
