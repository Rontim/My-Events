"use client";

import React from "react";

import NavLinks from "./EventNav/NavLinks";
import SearchBar from "./EventNav/SearchBar";
import Logo from "./EventNav/Logo";

const EventNavBar = () => {
  return (
    <nav className="px-4 py-2.5 dark:bg-transparent backdrop-blur-sm fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <Logo />
        <SearchBar />
        <NavLinks />
      </div>
    </nav>
  );
};

export default EventNavBar;
