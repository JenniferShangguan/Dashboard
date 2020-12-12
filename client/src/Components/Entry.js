import React, { useState } from 'react';
import Month from './Month';
import CarDetail from './CarDetail';


const Entry = ({ data, getModalInfo, setOpenModal }) => {
  const [quarterShown, setQuarterShown] = useState(0);

  let monthString = "";
  data.forEach(e => monthString += e.Month + " ")

  const handleClick = (quarter) => {
    setQuarterShown(quarter);
  }

  return (
    <tbody>
      {(quarterShown !== data[0].Quarter) ?
        <tr>
          <td>{data[0].Year}</td>
          <td style={{ cursor: "pointer" }} onClick={() => handleClick(data[0].Quarter)}>{data[0].Quarter}</td>
          <td>{monthString}</td>
          <td>
            <span className="car">{data.map((e, index) =>
              <CarDetail key={index} info={e.Launched[0]} getModalInfo={getModalInfo} setOpenModal={setOpenModal} />)}
            </span>
          </td>
          <td>
            <span className="car">{data.map((e, index) =>
              <CarDetail key={index} info={e.Upcoming[0]} getModalInfo={getModalInfo} setOpenModal={setOpenModal} />)}
            </span>
          </td>
        </tr> : data.map((e, index) =>
          <Month
            key={index} monthData={e}
            getQuarter={(q) => setQuarterShown(q)} getModalInfo={getModalInfo} setOpenModal={setOpenModal} />)
      }
    </tbody>
  )
}

export default Entry
