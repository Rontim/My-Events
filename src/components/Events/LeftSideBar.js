"use client";

import React from "react";
import dashboard from "../../../public/icons8-dashboard-50.png";
import Image from "next/image";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <aside
      className="fixed left-0 flex flex-col justify-center items-center top-0 w-64 no-scrollbar h-screen pl-5 pt-44 dark:bg-gray-900 overflow-y-auto max-[960px]:pl-0 max-[960px]:py-16 max-[960px]:w-36  max-[600px]:hidden"
      aria-label="Sidebar"
    >
      <ul className="space-y-6 ps-6 font-medium max-[960px]:space-y-8 max-[960px]:pt-12 ">
        <li>
          <Link
            href="/event"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <svg
              className="w-[29px] h-[29px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
              />
            </svg>
            <span className="ml-3 max-[960px]:hidden">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <Image
              src={dashboard}
              className="w-[29px] h-[29px]"
              alt="dashboard"
            />
            <span className="flex-1 ml-3 whitespace-nowrap dark:text-white max-[960px]:hidden">
              DashBoard
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/event/me"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <svg
              className="w-[29px] h-[29px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap max-[960px]:hidden">
              My Events
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/notifications"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <svg
              className="w-[29px] h-[29px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap max-[960px]:hidden">
              Notifications
            </span>
            <span className="inline-flex items-center max-[960px]:hidden justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              3
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/profile"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <svg
              className="w-[29px] h-[29px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                d="M3.656 12.115a3 3 0 0 1 5.682-.015M13 5h3m-3 3h3m-3 3h3M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm6.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap dark:text-white max-[960px]:hidden">
              Profile
            </span>
          </Link>
        </li>

        <li>
          <a
            href="/event/me/create"
            className="flex items-center max-[960px]:w-12 max-[960px]:h-12 p-2 text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  max-[960px]:rounded-full max-[960px]:dark:bg-black"
          >
            <svg
              className="w-[29px] h-[29px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap dark:text-white max-[960px]:hidden">
              Create
            </span>
          </a>
        </li>
      </ul>

      <div
        id="dropdown-cta"
        className="p-4 ml-2 w-[75%] mt-6 rounded-lg space-x-1 bg-blue-50 dark:bg-blue-900 max-[960px]:hidden"
        role="alert"
      >
        <div className="flex items-center mb-3">
          <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
            Live
          </span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
            data-dismiss-target="#dropdown-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-2.5 h-2.5 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
          Discover the latest events in your area! Explore a wide range of
          exciting events and stay updated with what&apos;s happening around
          you.
        </p>
        <a
          className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          href="#"
        >
          Explore Events
        </a>
      </div>
    </aside>
  );
};

export default LeftSideBar;
