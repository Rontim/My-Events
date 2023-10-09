"use client";

import EventPost from "@/components/Events/EventPost";

import { events } from "../../../public/dummy/events";

export default function Event() {
  const eventsList = events.map((event) => (
    <EventPost
      key={event.id}
      eventName={event.title}
      content={event.description}
      eventLocation={event.location}
      eventDate={event.date}
      eventImg={event.image}
    />
  ));

  return (
    <div className="mb-0 border-x border-black dark:border-black">
      <ul className="flex flex-col space-y-0 mt-0 scrollb">{eventsList}</ul>
    </div>
  );
}
