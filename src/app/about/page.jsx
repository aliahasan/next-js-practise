import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const About = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <div>
      <h1>About Page</h1>
      <div className="text-center space-x-10 font-bold underline underline-offset-8 ">
        <Link href="about/mission">Mission</Link>
        <Link href="about/history">History</Link>
      </div>
    </div>
  );
};

export default About;


