
import "./Worker.css"
import React, {  useRef } from 'react';
import AddNewUser from "./addNewUser";
function InputsData({setNewWorkerInfo,setWorkers,newWorkerInfo}) {
    const NameRef = useRef()
    const SurnameRef = useRef()
    const AgeRef = useRef()
    const SalaryRef = useRef()
    
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
            <AddNewUser newWorkerInfo={newWorkerInfo} setWorkers={setWorkers} NameRef={NameRef} SurnameRef={SurnameRef} AgeRef={AgeRef} SalaryRef={SalaryRef}/>
          </div>
      </>
    );
  }
  
  export default InputsData;