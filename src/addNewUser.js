 function addNewUser (SalaryRef,AgeRef,SurnameRef,NameRef,setWorkers,newWorkerInfo) {
    let newWorker = newWorkerInfo
    setWorkers(prevworkers => [...prevworkers, newWorker])
    SalaryRef.current.value = null
    AgeRef.current.value = null
    SurnameRef.current.value = ""
    NameRef.current.value = ""
  }
  export default addNewUser