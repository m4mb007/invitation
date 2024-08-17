import { React, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Contact Person</h2>
            <a
              href="https://wa.me/60162872741"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Masni
            </a>
            <br />
            <a
              href="https://wa.me/60169707313"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Haizul
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
