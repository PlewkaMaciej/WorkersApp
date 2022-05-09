import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import "./Worker.css"
import React, {  useRef } from 'react';
function InputsData({setNewWorkerInfo,setWorkers,newWorkerInfo}) {
    const NameRef = useRef()
    const SurnameRef = useRef()
    const AgeRef = useRef()
    const SalaryRef = useRef()
    const addNewUser = () => {
        let newWorker = newWorkerInfo
        setWorkers(prevworkers => [...prevworkers, newWorker])
        SalaryRef.current.value = null
        AgeRef.current.value = null
        SurnameRef.current.value = ""
        NameRef.current.value = ""
      }
    return (
      <>
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
      </>
    );
  }
  
  export default InputsData;