// components/ImageModal.js
import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Enlarged" />
      </div>
    </div>
  );
};

export default ImageModal;
