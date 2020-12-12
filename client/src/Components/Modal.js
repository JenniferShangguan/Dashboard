import React from 'react';

const Modal = ({ info, setOpenModal, isOpen }) => {
  const handleClose = () => {
    setOpenModal();
  };

  return (
    <div  onClick={handleClose}>
      {isOpen && <div className="modal-container" style={{ width: "100px" }}  onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="modal-cross-btn">x</button>
          <h1 className="modal-header">Car Detail</h1>
          <div className="modal-content">
            <p>Make: {info.make}</p>
            <p>Model: {info.model}</p>
            <p>Type: {info.type}</p>
            <p>Price: ${info.price}</p>
          </div>
      </div>}
    </div>
  )
}

export default Modal;
