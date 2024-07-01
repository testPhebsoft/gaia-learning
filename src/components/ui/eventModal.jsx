import React from "react";
import Modal from "react-modal";
import Link from "next/link";

import "./ui-styles.css";

const EventModal = ({ isOpen, onRequestClose, event }) => {
  const formatDate = (date) => {
    if (!date) return "";

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date(date)
    );

    const dayOfMonth = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    }).format(new Date(date));
    const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

    return formattedDate.replace(dayOfMonth, `${dayOfMonth}${ordinalSuffix}`);
  };

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // exceptions for 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Event Modal"
      className="event-modal"
      overlayClassName="event-modal-overlay"
    >
      <div className="relative flex flex-col items-start p-10 gap-4 w-96 h-auto bg-white shadow-l rounded-lg">
        <div className="flex flex-col items-start gap-1 w-full h-20">
          <div className="flex items-center gap-2 w-full h-8">
            <div
              className="w-8 h-8 bg-cover"
              style={{ backgroundImage: "url('/ledger.svg')" }}
            ></div>
            <div className="w-full h-7 font-semibold text-xl leading-7 text-black">
              {event?.title}
            </div>
          </div>

          <div className="flex flex-col items-start pl-16 pr-6 gap-1 w-full h-11">
            <div className="h-5 font-normal text-sm leading-5 text-gray-700">
              {event?.start ? formatDate(event.start) : ""}
            </div>
            <div className="w-26 h-5 font-normal text-sm leading-5 text-gray-700">
              {event?.start?.toLocaleTimeString()} {" - "}
              {event?.end?.toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="flex">
          <Link href="" className="flex">
            <img src="/pushPin.svg" alt="pinIcon" className="h-6 w-6 mr-2" />
            <span className="h-5 text-sm text-teal-500">
              This is link / address
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-4 w-full h-33">
          <div className="flex items-center gap-2 w-22 h-6">
            <div
              className="w-6 h-6 bg-cover"
              style={{ backgroundImage: "url('/memo.svg')" }}
            ></div>
            <div className="w-14 h-6 font-normal text-base leading-6 text-black">
              Details
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-5">
            <div className="w-16 h-5 font-normal text-sm leading-5 text-gray-700">
              Educator
            </div>
            <div className="w-12 h-5 font-medium text-sm leading-5 text-right text-black">
              Leo Do
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-5">
            <div className="w-15 h-5 font-normal text-sm leading-5 text-gray-700">
              Learners
            </div>
            <div className="w-27 h-5 font-medium text-sm leading-5 text-right text-black">
              Gareth Stevens
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-5">
            <div className="w-13 h-5 font-normal text-sm leading-5 text-gray-700">
              Service
            </div>
            <div className="w-36 h-5 font-medium text-sm leading-5 text-right text-black">
              1:1 Tuition (package)
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
