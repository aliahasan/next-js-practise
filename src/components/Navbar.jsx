"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import DashNav from "./DashNav";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname(); // Corrected the variable name to camelCase
  const session = useSession();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Blog", path: "/blogs" },
    { title: "Meal", path: "/meals" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  // Check if the current path is a dashboard route and return the DashNav component
  if (pathname.includes("dashboard")) {
    return <DashNav />;
  }
  // Function to handle login redirection

  return (
    <nav className="sticky top-0 left-0 w-full bg-white/20 backdrop-blur-lg text-white font-semibold py-4 px-10 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo section */}
        <h6 className="text-2xl font-bold">Logo</h6>
        {/* Links section */}
        <ul className="flex items-center gap-x-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`${
                  pathname === link.path ? "text-green-500" : "text-white"
                } hover:text-green-300 transition-colors duration-300`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Login button */}
        <>
          <div className="flex items-center gap-x-3  ">
            <div>
              {session?.data?.user?.image && (
                <Image
                  src={session.data?.user?.image}
                  width={36}
                  height={30}
                  className="rounded-full"
                  aria-required="true"
                  alt="image"
                ></Image>
              )}
            </div>
            <Link href="/api/auth/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
                Signup
              </button>
            </Link>
            {session.data?.user ? (
              <button
                onClick={() => signOut()}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <Link href="/api/auth/signin">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
