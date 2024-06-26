import React from "react";
import Modal from "react-modal";
import "../app/globals.css";

const TermsConditions = ({ isOpen, onClose }) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Terms and Conditions Modal"
      className="modal bg-white rounded-lg p-4 shadow-lg max-w-md mx-auto"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
    >
      <div className="modal-header pb-2 mb-4 flex justify-between items-center">
        <p className="text-lg font-semibold">Terms and Conditions</p>
        <button
          className="close-button text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-700">{loremIpsum}</p>
      </div>
    </Modal>
  );
};

export default TermsConditions;
