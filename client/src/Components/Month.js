import React from 'react';

const Month = ({ monthData, getQuarter, getModalInfo, setOpenModal }) => {
  const handleClick = (e) => {
    getQuarter(0)
  }
  const handleClickCar = (info) => {
    getModalInfo(info)
    setOpenModal()
  }

  return (
    <tr>
      <td>{monthData.Year}</td>
      <td style={{ cursor: "pointer" }} onClick={handleClick}>{monthData.Quarter}</td>
      <td>{monthData.Month}</td>
      <td style={{ cursor: "pointer" }} onClick={() => handleClickCar(monthData.Launched[0])}>{monthData.Launched[0].make}</td>
      <td style={{ cursor: "pointer" }} onClick={() => handleClickCar(monthData.Upcoming[0])}>{monthData.Upcoming[0].make}</td>
    </tr>
  )
}

export default Month;
