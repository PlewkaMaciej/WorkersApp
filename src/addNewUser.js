import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
 function AddNewUser ({newWorkerInfo, setWorkers, SalaryRef, AgeRef, SurnameRef, NameRef}) {
  const addNewUser = () => {
    let newWorker = newWorkerInfo
    setWorkers(prevworkers => [...prevworkers, newWorker])
    SalaryRef.current.value = null
    AgeRef.current.value = null
    SurnameRef.current.value = ""
    NameRef.current.value = ""
  }
    return(
      <Button onClick={addNewUser} variant='btn btn-outline-info' className="adding-user-button">Add new user!</Button>
    )
  }
  export default AddNewUser