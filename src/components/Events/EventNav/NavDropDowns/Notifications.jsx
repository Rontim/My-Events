"use client";

import NotificationItem from "./components/NotificationItem";

const Notifications = ({ notifications }) => (
  <div
    className="hidden overflow-y-scroll no-scrollbar z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
    id="notification-dropdown"
  >
    <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
      Notifications
    </div>
    <div className="overflow-y-auto">
      {notifications.map((notification, index) => (
        <NotificationItem key={index} {...notification} />
      ))}
    </div>
    <a
      href="#"
      className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
    >
      <div className="inline-flex items-center">
        <svg
          aria-hidden="true"
          className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11
                        .414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
            fillRule="evenodd"
          ></path>
        </svg>
        View all
      </div>
    </a>
  </div>
);

export default Notifications;
