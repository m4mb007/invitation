import { FaMapMarkerAlt, FaPhoneAlt, FaHome, FaInfoCircle } from 'react-icons/fa';
import React, { useState } from 'react';


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
              <span className="close" onClick={handleClose}>&times;</span>
              <h2>Program</h2>
              <ul>
                <li>3:00 PM - Arrival of Guest </li>
                <li>3:30 PM - Cake Cutting</li>
                <li>3:45 PM - Lunch</li>
                <li>6:00 PM - Good Bye</li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default EventScheduleModal;
  


