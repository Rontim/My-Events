import Image from "next/image";
import React from "react";

const EventPost = ({
  eventName,
  eventDate,
  eventLocation,
  content,
  eventImg = null,
  userImage = null,
  userName = "John Doe",
}) => {
  function getInitials(name) {
    const words = name.trim().split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
    return initials.substring(0, 2); // Limit to a maximum of 2 characters
  }
  const userNameInitials = getInitials(userName);
  const date = new Date(eventDate);

  const month = date.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[month];

  return (
    <div className="bg-white dark:bg-transparent border-b border-black dark:border-black p-4 shadow-md mt-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-3">
        <div className="flex items-center flex-col lg:flex-row">
          {userImage ? ( // Check if userImage is available
            <Image
              src={userImage}
              alt={`User Image for ${userName}`}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 dark:bg-gray-700 dark:text-white">
              {userNameInitials}
            </div>
          )}
          <p className="text-sm font-semibold ml-2 text-white">{userName}</p>
        </div>
        <p className="text-xs text-white">{`${monthName} ${date.getDate()}`}</p>
        <div className="flex flex-col ml-2 text-center lg:text-right">
          <p className="text-sm font-semibold text-white ">{eventName}</p>
          <p className="text-xs text-white ">{eventLocation}</p>
        </div>
      </div>
      <p className="text-sm dark:text-white lg:text-center">{content}</p>
      {eventImg && (
        <Image
          src={eventImg}
          alt={`Image for ${eventName}`}
          className="mt-4 rounded-lg max-w-full h-auto"
        />
      )}
      <div className="mt-4">
        <button className="mr-4 text-sm text-gray-500 hover:text-blue-500">
          RSVP
        </button>
        <button className="text-sm text-gray-500 hover:text-blue-500">
          Share
        </button>
      </div>
    </div>
  );
};

export default EventPost;
