import React from 'react';

const CarDetail = ({ info, getModalInfo, setOpenModal }) => {
  const handleClick = (info) => {
    getModalInfo(info)
    setOpenModal()
  }

  return (
    <div>
      <span style={{ cursor: "pointer" }} onClick={() => handleClick(info)}>{info.make}</span>
    </div>
  )
}

export default CarDetail;
