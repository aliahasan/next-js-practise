"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Blog", path: "/blogs" },
    { title: "Meal", path: "/meals" },
    { title: "Dashboard", path: "/dashboard" },
  ];
  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return (
      <div className="bg-green-600">
        <div className=" text-center">
          <h1>This is dashboard </h1>
        </div>
      </div>
    );
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg  text-white font-semibold py-4 px-10 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h6 className="text-2xl font-bold">Logo</h6>
        <ul className="flex items-center gap-x-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className={`${
                  pathName === link.path ? "text-green-500" : "text-white"
                } hover:text-green-300 transition-colors duration-300`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
