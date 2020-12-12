import { useState } from 'react';
import './App.css';
import TablePage from './Components/TablePage';
import Modal from './Components/Modal';

function App() {
  const [info, setInfo] = useState({});
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="tableWrapper">
        <TablePage getModalInfo={(info) => setInfo(info)} setOpenModal={() => setOpenModal(true)} />
      </div>
      <div className="modal"><Modal info={info} setOpenModal={() => setOpenModal(false)} isOpen={openModal}/></div>
    </div>
  );
}

export default App;
