"use client";

import Image from "next/image";
import logo from "../../public/logo-removebg-preview.png";
import { Button, Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { isAuthenticated } = useSelector(
    (state) => state.user.isAuthenticated
  );
  const router = useRouter();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Image src={logo} className="h-16 mb-0 mr-3 w-28" alt="logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          My Events
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!isAuthenticated ? (
          <Button onClick={() => router.push("/auth")}>Get started</Button>
        ) : (
          <Button>Logout</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <Navbar.Link active href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
