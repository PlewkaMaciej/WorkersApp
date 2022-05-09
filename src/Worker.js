import 'bootstrap/dist/css/bootstrap.css';
import "./Worker.css"

import React, { useState } from 'react';
import ListOfWorkers from './ListOfWorkers';
import InputsData from './InputsData';
function Worker() {
  
  const [workers, setWorkers] = useState([{ name: "Jan", surname: "Kowalski", age: 22, salary: 2500 }]);
  const [newWorkerInfo, setNewWorkerInfo] = useState({ name: "", surname: "", age: 0, salary: 0 })
 
  
  return (
    <>
      <div className='main-container' >
        <div className='heading-container'>
          <h1 className='main-heading'>Our Workers</h1>
        </div>
        <div className='users-and-input-container'>
         <InputsData setWorkers={setWorkers} setNewWorkerInfo={setNewWorkerInfo} newWorkerInfo={newWorkerInfo}/>
          <ListOfWorkers pracownicy={workers} setPracownicy={setWorkers}/>
        </div>
      </div>
    </>
  );
}

export default Worker;