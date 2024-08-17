import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import React, { useState } from "react";

const EventScheduleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScheduleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-item" onClick={handleScheduleClick}>
        <FaInfoCircle className="icon" />
        <span className="nav-label">Event Schedule</span>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <div className="tentative-inner">
              <h2>Program </h2>

              <div className="item-tentative">
                <h3>3:00 PM - Arrival of Guests</h3>
                <span>
                  Warm smiles and joyful greetings as we welcome our cherished
                  guests.
                </span>
              </div>

              <div className="item-tentative">
                <h3>3:30 PM - Cake Cutting Ceremony</h3>
                <span>
                  Gather around, it’s time to celebrate! Join us in singing
                  "Happy Birthday" and share in the joy as we cut the birthday
                  cake.
                </span>
              </div>

              <div className="item-tentative">
                <h3>3:45 PM - Hi-Tea Delight</h3>
                <span>
                  Indulge in a delightful array of treats. Savor every bite as
                  we enjoy a relaxing hi-tea together.
                </span>
              </div>

              <div className="item-tentative">
                <h3>6:00 PM - Farewell and Thanks</h3>
                <span>
                  As our celebration comes to a close, we thank you for being
                  part of this special day. Safe travels home!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventScheduleModal;
