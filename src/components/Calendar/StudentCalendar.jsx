"use client"

import React, { useState } from "react";
import { DateSelectArg, EventApi, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import EventModal from "../ui/eventModal";

import "./StudentCalendar.css";

// const events = [{ title: "Meeting", start: new Date() }];

const StudentCalendar = ({ events }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="flex flex-col p-4 w-1/2">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next", // left and right arrows
          center: "title",
          end: "dayGridMonth,dayGridWeek,dayGridDay", // month, week and day buttons
        }}
        selectable={true}
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />

      <EventModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        event={selectedEvent}
      />
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <p className="cursor-pointer">
        <>{eventInfo.timeText}</>{" "}
        <b>{eventInfo.event.title}</b>
      </p>
    </>
  );
}

export default StudentCalendar;
