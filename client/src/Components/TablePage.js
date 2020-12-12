import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Entry from './Entry.js';

const TablePage = ({ getModalInfo, setOpenModal }) => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    axios.get("/api/cars")
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])

  let quarter = [...new Set(cars.map(e => e.Quarter))];

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Quarter</th>
          <th>Month</th>
          <th>Launched Make</th>
          <th>Upcoming Make</th>
        </tr>
      </thead>
      {quarter.map((e, index) => 
        <Entry key={index} data={cars.filter(car => car.Quarter === e)} getModalInfo={getModalInfo} setOpenModal={setOpenModal} />)}
    </table>
  )
}

export default TablePage;
