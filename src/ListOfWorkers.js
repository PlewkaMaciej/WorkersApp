import 'bootstrap/dist/css/bootstrap.css';
import "./Worker.css"
import Button from "react-bootstrap/Button";
function ListOfWorkers
    ({ pracownicy ,setPracownicy}) {
    const DeleteWorker = ((e) => {
        let newList = pracownicy
        newList.splice(e.target.id, 1)
        setPracownicy([...newList])
    })
    return (
        <>
            <div className='container-showing-users'>
                {pracownicy.map((value, id) => {
                    return (
                        <div className='user-info-in-container' key={id}>

                            {Object.keys(value).map((key) => {
                                return <p key={key} >{key}: {value[key]} </p>
                            })}
                            <Button onClick={DeleteWorker} className="delete-user-button" variant='btn btn-outline-info' id={id}>X</Button>
                        </div >
                    )


                })
                }
            </div>
        </>
    );
}

export default ListOfWorkers