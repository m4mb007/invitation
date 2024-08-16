import React, { useState } from 'react';
import './BottomNav.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaHome, FaInfoCircle } from 'react-icons/fa';
import ContactModal from './ContactModal';
import EventScheduleModal from './EventScheduleModal';

const BottomNav = () => {
  const handleMapClick = () => {
    window.location.href = "https://ul.waze.com/ul?place=ChIJqekvuJRTzDER8O_dL103je8&ll=3.06939840%2C101.48484010&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";
  };

  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={handleMapClick}>
        <FaMapMarkerAlt className="icon" />
        <span className="nav-label">Map</span>
      </div>
      <ContactModal />
      <EventScheduleModal />
    </div>
  );
};

export default BottomNav;
