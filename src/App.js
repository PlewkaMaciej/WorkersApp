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
  const [NameValue, setNameValue] = useState()
  const [SurnameValue, setSurnameValue] = useState()
  const [AgeValue, setAgeValue] = useState()
  const [SalaryValue, setSalaryValue] = useState()
  const getNameValue = (e) => {
    setNameValue(e.target.value)
  }
  const getSurnameValue = (e) => {
    setSurnameValue(e.target.value)
  }
  const getAgeValue = (e) => {
    setAgeValue(e.target.value)
  }
  const getSalaryValue = (e) => {
    setSalaryValue(e.target.value)
  }
  const addNewUser = () => {
    let newWorker = { name: NameValue, surname: SurnameValue, age: AgeValue, salary: SalaryValue }
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
            <input ref={NameRef} onChange={getNameValue} className="user-info-input" type="text" />
            <label className='user-label'>Surname:</label>
            <input ref={SurnameRef} onChange={getSurnameValue} className="user-info-input" type="text" />
            <label className='user-label'>Age:</label>
            <input ref={AgeRef} onChange={getAgeValue} className="user-info-input" type="number" />
            <label className='user-label'>Salary  :</label>
            <input ref={SalaryRef} onChange={getSalaryValue} className="user-info-input" type="number" />
            <Button onClick={addNewUser} variant='btn btn-outline-info' className="adding-user-button">Add new user!</Button>
          </div>
          <div className='container-showing-users'>
            {workers.map((value) => {
              return (
                <div className='user-info-in-container' key={value}>

                  {Object.keys(value).map((key) => {
                    return <p key={key} >{key}: {value [key]} </p>
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
