import 'bootstrap/dist/css/bootstrap.css';
import "./app.css"
import Button from "react-bootstrap/Button";
import React, { useState, useRef } from 'react';

function App() {
  const NameRef = useRef()
  const SurnameRef = useRef()
  const AgeRef = useRef()
  const SalaryRef = useRef()
  const [workers, setWorkers] = useState([{ name: "Jan", surname: "Kowalski", age: 22, salary: 2500 }]);
  const [newWorkerInfo, setNewWorkerInfo] = useState({ name: "", surname: "", age: 0, salary: 0 })
  const addNewUser = () => {
    let newWorker = newWorkerInfo
    setWorkers(prevworkers => [...prevworkers, newWorker])
  }
  return (
    <>
      <div className='main-container' >
        <div className='heading-container'>
          <h1 className='main-heading'>Our Workers</h1>
        </div>
        <div className='users-and-input-container'>
          <div className='user-info-container'>
            <label className='user-label'>Name:</label>
            <input ref={NameRef} onChange={e => setNewWorkerInfo({ ...newWorkerInfo, name: e.target.value })} className="user-info-input" type="text" />
            <label className='user-label'>Surname:</label>
            <input ref={SurnameRef} onChange={e => setNewWorkerInfo({ ...newWorkerInfo, surname: e.target.value })} className="user-info-input" type="text" />
            <label className='user-label'>Age:</label>
            <input ref={AgeRef} onChange={e => setNewWorkerInfo({ ...newWorkerInfo, age: e.target.value })} className="user-info-input" type="number" />
            <label className='user-label'>Salary  :</label>
            <input ref={SalaryRef} onChange={e => setNewWorkerInfo({ ...newWorkerInfo, salary: e.target.value })} className="user-info-input" type="number" />
            <Button onClick={addNewUser} variant='btn btn-outline-info' className="adding-user-button">Add new user!</Button>
          </div>
          <div className='container-showing-users'>
            {workers.map((value) => {
              return (
                <div className='user-info-in-container' key={value}>

                  {Object.keys(value).map((key) => {
                    return <p key={key} >{key}: {value[key]} </p>
                  })}
                </div >
              )


            })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
