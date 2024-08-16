import {React,  useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-item" onClick={handleContactClick}>
        <FaPhoneAlt className="icon" />
        <span className="nav-label">Contact</span>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Contact Options</h2>
            <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> +60 12 345 6789
            </a>
            <br />
            <a href="https://wa.me/60198765432" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> +60 19 876 5432
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
