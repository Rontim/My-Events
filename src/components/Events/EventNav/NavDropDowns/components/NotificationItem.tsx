"use client";

import Image from "next/image";

interface NotificationItemProps {
  avatar: string;
  name: string;
  action: string;
  time: string;
  message: string;
  mention: string;
}

const NotificationItem = ({
  avatar,
  name,
  action,
  time,
  message,
  mention,
}: NotificationItemProps) => (
  <a
    href="#"
    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
  >
    <div className="flex-shrink-0">
      <Image
        className="w-11 h-11 rounded-full"
        width={44}
        height={44}
        src={avatar}
        alt={`${name} avatar`}
      />
      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white dark:border-gray-700">
        {action === "message" && (
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        )}
        {action === "follow" && (
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        )}
      </div>
    </div>
    <div className="pl-3 w-full">
      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
        {action === "message" && (
          <>
            New message from{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {name}
            </span>
            : &apos;{message}&quot;
          </>
        )}
        {action === "follow" && (
          <>
            <span className="font-semibold text-gray-900 dark:text-white">
              {name}
            </span>{" "}
            and
            <span className="font-medium text-gray-900 dark:text-white">
              {mention} others
            </span>
            {` ${action}ed you.`}
          </>
        )}
      </div>
      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
        {time}
      </div>
    </div>
  </a>
);

export default NotificationItem;
