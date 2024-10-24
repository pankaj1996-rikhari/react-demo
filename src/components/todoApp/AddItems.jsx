import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { ToastContainer} from 'react-toastify';
const AddItems = ({addItem, add, setAdd}) => {
    
    return (
        <>
            <div className='add-items mb-4'>
                <input type="text" value={add} className='form-control' placeholder='add items' onChange={(e) => setAdd(e.target.value)} />
                <button className='btn btn-primary ms-4'><IoIosAddCircle onClick={addItem} /></button>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddItems
